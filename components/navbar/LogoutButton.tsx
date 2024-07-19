import { Button } from "@/components/ui/button";
import { usePoppis } from "@/lib/context/poppisContext";


export const LogoutButton = () => {
const { setProfileId } = usePoppis();
const handleLogout = () => {
    if(setProfileId) {
        setProfileId(undefined);
    }
    document.cookie = "Authorization=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax";
  };

  return (
    <Button onClick={handleLogout}>Logout</Button>
  );
};

export default LogoutButton;
