import { T_GameIdle } from "../domain";
import { gameRepository } from "../repositories/game";

export const getIdleGames = async (): Promise<T_GameIdle[]> => {
  const games = await gameRepository.gamesList({ status: "IDLE" });

  return games as T_GameIdle[];
};
