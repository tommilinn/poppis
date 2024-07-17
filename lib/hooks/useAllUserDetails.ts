import { IUser } from "@/app/api/types";
import { useQuery } from "@tanstack/react-query";

const fetchAllDetails = async (
  userId: string | undefined
): Promise<IUser | null> => {
  if (!userId) return null;
  const response = await fetch(`/api/users/${userId}`);
  return await response.json();
};

const useAllUserDetails = (userId: string | undefined) =>
  useQuery({
    queryKey: ["allProfiles"],
    queryFn: () => fetchAllDetails(userId),
  });

export default useAllUserDetails;
