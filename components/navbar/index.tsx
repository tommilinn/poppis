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
import { usePoppis } from "@/lib/context/poppisContext";
import LogoutButton from "./LogoutButton";

const NavBar = () => {
  const { modalState, openModalType, closeModal } = useModalState();
  const { profileDetails, isLoggedIn } = usePoppis();

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
                Etusivu
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/scoreboard" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Menestyjät
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/achievements" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Saavutukset
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {isLoggedIn && <NavigationMenuItem>
            <Link href="/achievements/hunter" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              🏆 Metsästys 🏆
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>}

          {isLoggedIn && <NavigationMenuItem>
            <Link href="/profile" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Sinä
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
