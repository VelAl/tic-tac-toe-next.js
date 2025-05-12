"use server";

import { T_Player } from "@/entities/game/domain";
import { createGame } from "@/entities/game/server";
import { prisma } from "@/shared/lib/db";
import { createLeft } from "@/shared/lib/either";
import { redirect } from "next/navigation";

export const createGameAction = async () => {
  const user = (await prisma.user.findFirst()) as T_Player;

  if (!user) {
    return createLeft(`User not found` as const);
  }

  const gameRes = await createGame(user);

  if (gameRes.type === "success") {
    redirect(`/game/${gameRes.value.id}`);
  }

  return gameRes;
};
