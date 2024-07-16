const useLogin = () => {
  const login = async (username: string, password: string) => {
    if(process.env.NODE_ENV === "development") {
        username = "testUser";
        password = "testPass";
    }

    await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      mode: "cors",
    });
    await fetch('/api/hello');
  };
  return { login };
};

export default useLogin;
