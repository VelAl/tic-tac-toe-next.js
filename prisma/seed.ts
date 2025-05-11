import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      login: "Alex",
      passwordHash: "some-password",
      rating: 1,
    },
  });

  await prisma.user.create({
    data: {
      login: "Jinx",
      passwordHash: "random-password",
      rating: 100,
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
