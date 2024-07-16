const useLogin = () => {
  const login = async (username: string, password: string) => {
    if (process.env.NODE_ENV === "development") {
      username = "testUser";
      password = "testPass";
    }

    await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      mode: "cors",
    });
  };

  const registerUser = async (
    username: string,
    password: string,
    displayName: string
  ) => {
    await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, displayName }),
      mode: "cors",
    });
  };
  return { login, registerUser };
};

export default useLogin;
