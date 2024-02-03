
import { Button } from "@/components/ui/button"

export const LoginButton = () => {
    const handleLogin = () => {
        alert("we are doing some login stuff")
    }

    return (
        <Button onClick={() => {alert("we are doing some login stuff")}}>Login</Button>
    )
}

export default LoginButton;