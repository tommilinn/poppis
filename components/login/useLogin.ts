import { IUser } from "@/app/api/types";
import { ICredentials } from "./types";
import { useMutation } from "@tanstack/react-query";
import { PoppisProvider, usePoppis } from "@/lib/poppisContext";
import { setPriority } from "os";

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

const useLogin = () => {
  const { setProfileId } = usePoppis();

  const loginMutation = useMutation({
    mutationKey: ["loginUser"],
    mutationFn: (credentials: ICredentials) => fetchLogin(credentials),
    onSuccess: (userId: string) => {
      if (setProfileId) {
        setProfileId(userId);
      }
    },
    onError: (error: Error) => console.error(error.message),
  });

  return loginMutation;
};

export default useLogin;
