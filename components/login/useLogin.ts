import { IUser } from "@/app/api/types";
import { ICredentials } from "./types";
import { useMutation } from "@tanstack/react-query";

const fetchLogin = async (credentials: ICredentials): Promise<string> => {
  if (process.env.NODE_ENV === "development") {
    credentials.username = "testUser";
    credentials.password = "testPass";
  }

  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
    mode: "cors",
  });
  const data = await response.json();
  return data.userId;
};

const useLogin = () =>
  useMutation({
    mutationKey: ["loginUser"],
    mutationFn: (credentials: ICredentials) => fetchLogin(credentials),
  });

export default useLogin;
