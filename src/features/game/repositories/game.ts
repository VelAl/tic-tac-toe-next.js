import { prisma } from "@/shared/lib/db";
import { Game, User, Prisma } from "generatedPrisma";
import { z } from "zod";

import {
  T_Game,
  T_GameIdle,
  T_GameOver,
  T_GameOverDraw,
  T_GameProgress,
  T_Player,
} from "../domain";

const fieldShema = z.array(z.union([z.string(), z.null()]));

function dbGameToTypeT_Game(
  game: Game & {
    players: User[];
    winner: User | null;
  }
): T_Game {
  switch (game.status) {
    case "IDLE": {
      const [creator] = game.players;
      if (!creator) {
        throw new Error("The game's status 'IDLE' implies a crator player!");
      }

      return {
        creator,
        id: game.id,
        status: game.status,
      } satisfies T_GameIdle;
    }

    case "GAME_OVER_DRAW":
    case "IN_PROGRESS": {
      return {
        id: game.id,
        players: game.players,
        status: game.status,
        field: fieldShema.parse(game.field),
      } satisfies T_GameProgress | T_GameOverDraw;
    }

    case "GAME_OVER": {
      if (!game.winner)
        throw new Error("The game's status 'GAME_OVER' implies a winner!");
      return {
        id: game.id,
        players: game.players,
        status: game.status,
        field: fieldShema.parse(game.field),
        winner: game.winner as T_Player,
      } satisfies T_GameOver;
    }
  }

  return {} as T_Game;
}

async function gamesList(where: Prisma.GameWhereInput): Promise<T_Game[]> {
  const games = await prisma.game.findMany({
    where,
    include: {
      winner: true,
      players: true,
    },
  });

  return games.map(dbGameToTypeT_Game);
}

export const gameRepository = {
  gamesList,
};
