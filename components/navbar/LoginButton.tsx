import { Button } from "@/components/ui/button";

interface IButtonProps {
  onClick: () => void;
}

export const LoginButton = (props: IButtonProps) => {
  const handleLogin = () => {
    props.onClick();
  };

  return (
    <Button onClick={handleLogin}>Login</Button>
  );
};

export default LoginButton;
