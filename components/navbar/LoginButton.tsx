import { Button } from "@/components/ui/button";

interface IButtonProps {
  isLogged: boolean;
  checkIsLogged: () => void;
  onClick: () => void;
}

export const LoginButton = (props: IButtonProps) => {
  const handleLogin = () => {
    props.onClick();
    props.checkIsLogged();
  };

  return (
    <Button onClick={handleLogin}>{props.isLogged ? "Logged" : "Login"}</Button>
  );
};

export default LoginButton;
