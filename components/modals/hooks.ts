import { useState } from "react";

type IModalTypes = "CLOSED" | "LOGIN" | "REGISTER";

export const useModalState = () => {
  const [modalState, setOpenModal] = useState<IModalTypes>("CLOSED");

  const openModalType = (type: IModalTypes) => {
    setOpenModal(type);
  };
  const closeModal = () => {
    setOpenModal("CLOSED");
  };
  return { modalState, openModalType, closeModal };
};
