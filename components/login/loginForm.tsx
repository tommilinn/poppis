"use client";

import { FormEvent, useEffect } from "react";
import useLogin from "./useLogin";
import Spinner from "../ui/spinner";

interface ILoginFormProps {
  closeModal: () => void;
}

const LoginForm = ({ closeModal }: ILoginFormProps) => {
  const { mutate, isPending, isSuccess, isError, error } = useLogin(); // Use the useLogin hook

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess, closeModal]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username")?.toString();
    const password = formData.get("password")?.toString();

    if (username && password) {
      mutate({ username, password });
    }
  };

  if (isPending) {
    return <Spinner />;
  }
  // Put required after debugging
  return (
    <form onSubmit={handleSubmit}>
      {isError && <p className="text-red-500 italic">{error.message}</p>}
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
