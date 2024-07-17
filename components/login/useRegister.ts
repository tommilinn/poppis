import { useMutation } from "@tanstack/react-query";
import { ICredentials } from "./types";
import { usePoppis } from "@/lib/poppisContext";

const fetchRegisterUser = async (
  credentials: ICredentials
): Promise<string> => {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
    mode: "cors",
  });
  return await response.json();
};

const useRegisterUser = () => {
  const { setProfileId } = usePoppis();

  return useMutation({
    mutationKey: ["registerUser"],
    mutationFn: (credentials: ICredentials) => fetchRegisterUser(credentials),
    onSuccess: (userId: string) => {
      if (setProfileId) {
        setProfileId(userId);
      }
    },
    onError: (error: Error) => {throw Error(error.message)},
  });
};

export default useRegisterUser;
