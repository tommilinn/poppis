"use client";

import LoginForm from "../login/loginForm";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useEffect, useRef } from "react";

interface ILoginModalProps {
  isOpen: boolean;
  onRegister: () => void;
  onClose: () => void;
}

const LoginModal = ({
  isOpen,
  onRegister,
  onClose,
}: ILoginModalProps): JSX.Element | null => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return isOpen ? (
    <Dialog open={isOpen} modal>
      <DialogContent ref={modalRef}>
        <DialogTitle>Log in</DialogTitle>
        <LoginForm closeModal={onClose}></LoginForm>
        <DialogDescription>
          <Button onClick={onRegister}>Register</Button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  ) : null;
};

export default LoginModal;
