import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

type T_Props = {
  login: string;
  password: string;
  onChangeLogin: (v: string) => void;
  onChangePassword: (v: string) => void;
};

export const AuthInputs = ({
  login,
  onChangeLogin,
  onChangePassword,
  password,
}: T_Props) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="login">Login</Label>
        <Input
          id="login"
          type="text"
          placeholder="Enter Login"
          value={login}
          onChange={(e) => onChangeLogin(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => onChangePassword(e.target.value)}
        />
      </div>
    </>
  );
};
