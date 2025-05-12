import { Alert, AlertDescription } from "@/shared/ui/alert";

type T_Props = {
  error: string;
};

export const ErrorMessage = ({ error }: T_Props) => {
  return (
    <Alert variant="destructive">
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
};
