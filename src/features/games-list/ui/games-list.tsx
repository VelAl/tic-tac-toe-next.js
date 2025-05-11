import { getIdleGames } from "@/entities/game/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export const GamesList = async () => {
  const games = await getIdleGames();

  return (
    <div className="grid grid-cols-2 gap-4">
      {games.map((game) => (
        <Card key={game.id}>
          <CardHeader>
            <CardTitle>Initiator: {game.creator.login}</CardTitle>
          </CardHeader>
          <CardContent>Rating: {game.creator.rating}</CardContent>
        </Card>
      ))}
    </div>
  );
};
