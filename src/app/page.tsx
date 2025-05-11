import { GamesList } from "@/features/games-list/server";

export default async function Home() {
  return (
    <div className="flex justify-center flex-col gap-4 container mx-auto pt-8">
      <h1 className="text-4xl">Games</h1>
      <GamesList />
    </div>
  );
}
