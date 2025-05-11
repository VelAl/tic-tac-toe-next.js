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
    return {
      type: "error",
      message: "Player has already started a game!",
    };
  }

  const newGame = await gameRepository.createGame(player.id);

  return newGame;
};
