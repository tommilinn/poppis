"use client";

import { FormEvent, useEffect } from "react";
import useLogin from "./useLogin";

interface ILoginFormProps {
  closeModal: () => void;
}

const LoginForm = ({ closeModal }: ILoginFormProps) => {
  const { mutate } = useLogin(); // Use the useLogin hook

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username")?.toString();
    const password = formData.get("password")?.toString();

    if (username && password) {
      mutate({ username, password });
      closeModal()
    }
  };
  // Put required after debugging
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
