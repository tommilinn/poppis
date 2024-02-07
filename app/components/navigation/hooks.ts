import { useState } from "react"

// TODO: Now move login state to context? Maybe.
const useUserLogin = () => {
    const [isLogged, setLogged] = useState(false);
    const [isFirstLogin, setFirstLogin] = useState(false);

    const checkIsLogged = () => {
        setLogged(true);
        setFirstLogin(true)
    }

    return { isLogged, checkIsLogged };
}

export default useUserLogin;