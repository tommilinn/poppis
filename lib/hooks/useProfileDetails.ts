import { IUser } from "@/app/api/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const fetchProfileDetails = async (
  userId: string | undefined
): Promise<IUser | null> => {
  if (!userId) return null;
  const response = await fetch(`/api/profile/${userId}`);
  return await response.json();
};

const useProfileDetails = (id: string | undefined) => {
  const [profileId, setProfileId] = useState(id);
  const [profileDetails, setProfileDetails] = useState<IUser | null>(null);

  const result = useQuery<IUser | null, Error>({
    queryKey: ["profileDetails", profileId],
    queryFn: () => fetchProfileDetails(profileId)
  });
  
  useEffect(() => {
    if(result.isSuccess && profileDetails === null) {
      setProfileDetails(result.data);
    }
  }, [profileDetails, result.isSuccess, result.data]);

  return { profileDetails, setProfileId };
};
export default useProfileDetails;
