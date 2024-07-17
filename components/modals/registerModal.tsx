import RegisterForm from "@/components/login/registerForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useRef } from "react";

interface ILoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal = ({
  isOpen,
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
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
          <RegisterForm closeModal={onClose}/>
        </DialogHeader>
        <DialogDescription></DialogDescription>
      </DialogContent>
    </Dialog>
  ) : null;
};

export default RegisterModal;
