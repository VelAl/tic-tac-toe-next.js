import { PropsWithChildren, ReactNode } from "react";

type T_Props = PropsWithChildren & { actions: ReactNode };

export const Layout = ({ actions, children }: T_Props) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-row justify-end gap-4">{actions}</div>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </div>
  );
};
