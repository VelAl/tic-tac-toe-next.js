"use client";
import { Button } from "@/shared/ui/button";
import { createGameAction } from "../actions/create-game";
import { useActionState } from "react";

export const CreateGameButton = () => {
  const [data, dispatch, isPending] = useActionState(createGameAction, {
    value: undefined,
    type: "error",
  });

  return (
    <div className="flex flex-col gap-1 items-end">
      <form action={dispatch}>
        <Button disabled={isPending} type="submit">
          {isPending ? "Creating..." : "New Game"}
        </Button>
      </form>

      {data.type === "error" && <div className="text-destructive">{data.error}</div>}
    </div>
  );
};
