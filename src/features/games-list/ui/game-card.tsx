import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

type T_Props = {
  login: string;
  rating: number;
};

export const GameCard = ({ login, rating }: T_Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Creator: {login}</CardTitle>
      </CardHeader>
      <CardContent>Rating: {rating}</CardContent>
    </Card>
  );
};
