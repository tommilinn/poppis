import { useMutation } from "@tanstack/react-query";
import { ICredentials } from "./types";

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

const useRegisterUser = () =>
  useMutation({
    mutationKey: ["registerUser"],
    mutationFn: (credentials: ICredentials) => fetchRegisterUser(credentials),
  });

export default useRegisterUser;
