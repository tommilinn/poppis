"use client";

import { Button } from "@/components/ui/button";
import { usePoppis } from "@/lib/context/poppisContext";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useModalState } from "../modals/hooks";
import LoginModal from "../modals/loginModal";
import RegisterModal from "../modals/registerModal";
import { DesktopNavigation } from "./desktop";
import { MobileMenu } from "./mobile";

const NavBar = () => {
  const { modalState, openModalType, closeModal } = useModalState();
  const { profileDetails, isLoggedIn } = usePoppis();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLoginClick = () => {
    openModalType("LOGIN");
  };

  const handleRegisterClick = () => {
    openModalType("REGISTER");
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="w-full">
      <div className="flex w-full justify-between items-center px-4 py-3">
        <Link href="/" className="font-bold text-xl p-2">POPPIS</Link>

        <DesktopNavigation
          isLoggedIn={isLoggedIn}
          profileDetails={profileDetails}
          onLoginClick={handleLoginClick}
        />

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={toggleMobileMenu}
          size="icon"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        isLoggedIn={isLoggedIn}
        profileDetails={profileDetails}
        onClose={closeMobileMenu}
        onLoginClick={handleLoginClick}
      />

      <LoginModal
        isOpen={modalState === "LOGIN"}
        onRegister={handleRegisterClick}
        onClose={closeModal}
      />
      <RegisterModal
        isOpen={modalState === "REGISTER"}
        onClose={closeModal}
      />
    </div>
  );
};

export default NavBar;