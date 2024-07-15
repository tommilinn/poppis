import LoginForm from "../login/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { useEffect, useRef } from "react";

interface ILoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: ILoginModalProps): JSX.Element | null => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicked outside
  useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
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
        <DialogHeader>
          <DialogTitle>Log in</DialogTitle>
          <DialogDescription>
            <LoginForm ></LoginForm>
          </DialogDescription>
        </DialogHeader>
        <DialogClose onClick={onClose}>Close</DialogClose>
      </DialogContent>
    </Dialog>
  ) : null;
};

export default LoginModal;