import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      login: "Alex",
      passwordHash: "some-password",
      rating: 1,
    },
  });

  const user_2 = await prisma.user.create({
    data: {
      login: "Jinx",
      passwordHash: "random-password",
      rating: 100,
    },
  });

  await prisma.game.create({
    data: {
      status: "IDLE",
      field: Array(9).fill(null),
      players: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  await prisma.game.create({
    data: {
      status: "IDLE",
      field: Array(9).fill(null),
      players: {
        connect: {
          id: user_2.id,
        },
      },
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
