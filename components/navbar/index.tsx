"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { LoginButton } from "./LoginButton";
import Link from "next/link";
import LoginModal from "../modals/loginModal";
import { useModalState } from "../modals/hooks";
import RegisterModal from "../modals/registerModal";
import { usePoppis } from "@/lib/poppisContext";
import LogoutButton from "./LogoutButton";

const NavBar = () => {
  const { modalState, openModalType, closeModal } = useModalState();
  const { profileDetails } = usePoppis();

  const handleLoginClick = () => {
    openModalType("LOGIN");
  };

  const handleRegisterClick = () => {
    openModalType("REGISTER");
  };

  return (
    <div className="flex w-full justify-between items-center">
      <div className="p-5">POPPIS</div>
      <NavigationMenu className="w-full">
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/scoreboard" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Scoreboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {profileDetails && <NavigationMenuItem>
            <Link href="/profile" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Profile
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>}
        </NavigationMenuList>
      </NavigationMenu>
      {profileDetails ? (
        <LogoutButton />
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}

      <LoginModal
        isOpen={modalState === "LOGIN"}
        onRegister={handleRegisterClick}
        onClose={() => closeModal()}
      />
      <RegisterModal
        isOpen={modalState === "REGISTER"}
        onClose={() => closeModal()}
      />
    </div>
  );
};

export default NavBar;
