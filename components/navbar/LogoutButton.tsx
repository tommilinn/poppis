import { Button } from "@/components/ui/button";
import { usePoppis } from "@/lib/poppisContext";


export const LogoutButton = () => {
const { setProfileId } = usePoppis();
const handleLogout = () => {
    if(setProfileId) {
        setProfileId(undefined);
    }
  };

  return (
    <Button onClick={handleLogout}>Logout</Button>
  );
};

export default LogoutButton;
