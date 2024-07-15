
const useLogin = () => {

    const login = async (username: string, password: string) => {
        await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })

    }
    return { login };
}

export default useLogin;