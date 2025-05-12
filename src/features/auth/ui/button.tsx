import { Button } from "@/shared/ui/button";
import { Loader } from "lucide-react";

type T_Props = {
  isLoading: boolean;
  children: React.ReactNode;
};

export const SubmitButton = ({ children, isLoading }: T_Props) => {
  return (
    <Button type="submit" className="w-full" disabled={isLoading}>
      {isLoading && (
        <Loader className="h-5 w-5 animate-spin text-muted-foreground mr-4" />
      )}
      {children}
    </Button>
  );
};
