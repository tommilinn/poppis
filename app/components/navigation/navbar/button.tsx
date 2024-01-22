import useUserLogin from "../hooks";

interface IButtonProps {
    isLogged: boolean;
    checkIsLogged: () => void;
}

export const Button = (props: IButtonProps) => {
    const handleLogin = () => {
        props.checkIsLogged();
    }

    return (
        <button className=" p-2 m-1 border-solid border-2 border-blue-600 rounded-md"
            onClick={handleLogin}>{props.isLogged ? "User" : "Login"}</button >
    )
}

export default Button;