import { getIdleGames } from "@/entities/game/server";

import { CreateGameButton } from "./create-button";
import { GameCard } from "../ui/game-card";
import { Layout } from "../ui/layout";

export const GamesList = async () => {
  const games = await getIdleGames();

  return (
    <Layout actions={<CreateGameButton />}>
      {games.map((game) => (
        <GameCard
          key={game.id}
          login={game.creator.login}
          rating={game.creator.rating}
        />
      ))}
    </Layout>
  );
};
