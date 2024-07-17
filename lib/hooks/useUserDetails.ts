import { IUser } from "@/app/api/types";
import { useQuery } from "@tanstack/react-query";

const fetchUserDetails = async (userId: string | undefined): Promise<IUser> => {
  const response = await fetch(`/api/users/${userId}`);
  return await response.json();
};

const useUserDetails = (userId: string | undefined) =>
  useQuery({
    queryKey: ["userDetails"],
    queryFn: () => fetchUserDetails(userId),
  });

export default useUserDetails;
