"use client";

import { FormEvent } from "react";
import useRegisterUser from "./useRegister";

const RegisterForm = () => {
  const { mutate, data, isError } = useRegisterUser(); // Use the useLogin hook

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username")?.toString();
    const password = formData.get("password")?.toString();

    if (username && password) {
      mutate({ username, password });
    }
  };

  // Put required after debugging
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
