import { createLeft, createRight } from "@/shared/lib/either";
import { T_Player } from "../domain";
import { gameRepository } from "../repositories/game";

export const createGame = async (player: T_Player) => {
  const alreadyCreatedIdleGames = await gameRepository.gamesList({
    status: "IDLE",
    players: {
      some: { id: player.id },
    },
  });

  if (alreadyCreatedIdleGames.length) {
    return createLeft("Player has already started a game!" as const);
  }

  const newGame = await gameRepository.createGame(player.id);

  return createRight(newGame);
};
