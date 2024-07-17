"use client";

import { FormEvent, useEffect } from "react";
import useRegisterUser from "./useRegister";
import { usePoppis } from "@/lib/poppisContext";

const RegisterForm = () => {
  const { mutate, data, isError } = useRegisterUser(); // Use the useLogin hook
  const { setUserId } = usePoppis();
  
  useEffect(() => {
    if (data) {
      setUserId(data);
    }
  }, [data, setUserId]);
  
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
