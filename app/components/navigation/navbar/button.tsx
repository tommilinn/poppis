import useUserLogin from "../hooks";

interface IButtonProps {
    isLogged: boolean;
    checkIsLogged: () => void;
}

import { Button } from "@/components/ui/button"

export const LoginButton = (props: IButtonProps) => {
    const handleLogin = () => {
        props.checkIsLogged();
    }

    return (
        <Button onClick={() => {alert("we are doing some login stuff")}}>Login</Button>
    )
}

export default LoginButton;