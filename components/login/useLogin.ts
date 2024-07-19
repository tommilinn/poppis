import { IUser } from "@/app/api/types";
import { ICredentials } from "./types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { PoppisProvider, usePoppis } from "@/lib/context/poppisContext";
import { setPriority } from "os";

const fetchLogin = async (credentials: ICredentials): Promise<string> => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
    mode: "cors",
  });
  if (response.ok) {
    const data = await response.json();
    return data.userId;
  } else {
    throw new Error("Käyttäjätunnukset virheelliset");
  }
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
    onError: (error: Error) => {
      throw Error(error.message);
    },
  });

  return loginMutation;
};

export default useLogin;
