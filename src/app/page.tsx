import { prisma } from "@/shared/lib/db";
import { Card, CardTitle } from "@/shared/ui/card";

export default async function Home() {
  const res = await prisma.game.findMany();

  return (
    <div className="flex justify-center">
      {res.map(({ name, id }) => (
        <Card key={id} className="px-4">
          <CardTitle>{name}</CardTitle>
        </Card>
      ))}
    </div>
  );
}
