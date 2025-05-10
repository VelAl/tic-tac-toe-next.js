import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.game.create({
    data: {
      name: "GAME_1",
    },
  });

  await prisma.game.create({
    data: {
      name: "GAME_2",
    },
  });

  await prisma.game.create({
    data: {
      name: "GAME_3",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
