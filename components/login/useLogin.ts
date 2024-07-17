import { IUser } from "@/app/api/types";
import { ICredentials } from "./types";
import { useMutation } from "@tanstack/react-query";
import { PoppisProvider, usePoppis } from "@/lib/poppisContext";
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

const useLogin = (callBackAfterSuccess?: () => void) => {
  const { setProfileId } = usePoppis();

  const loginMutation = useMutation({
    mutationKey: ["loginUser"],
    mutationFn: (credentials: ICredentials) => fetchLogin(credentials),
    onSuccess: (userId: string) => {
      if (setProfileId) {
        setProfileId(userId);
        if (callBackAfterSuccess) {
          callBackAfterSuccess();
        }
      }
    },
    onError: (error: Error) => {
      throw Error(error.message);
    },
  });

  return loginMutation;
};

export default useLogin;
