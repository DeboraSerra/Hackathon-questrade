"use client";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, useContext, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Register from "./Register";
import { context } from "@/lib/context";

const Login = () => {
  const [show, setShow] = useState(false);
  const [register, setRegister] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { setIsLogged } = useContext(context)

  const router = useRouter();

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    setIsLogged(true);
    router.push("/dashboard");
  };

  const handleChange: ChangeEventHandler = (e) => {
    const { value, name } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (register) {
    return <Register setRegister={setRegister} />
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[400px] flex-col justify-between gap-10 border px-3 py-4 mt-10 max-sm:w-full max-sm:mx-3"
    >
      <h2 className="text-lg font-bold">Login</h2>
      <label htmlFor="email" className="flex flex-col gap-2 text-sm">
        E-mail
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          className="rounded-md border-none bg-gray-50"
        />
      </label>
      <label
        htmlFor="password"
        className="relative flex flex-col gap-2 text-sm"
      >
        Senha
        <input
          type={show ? "text" : "password"}
          name="password"
          id="password"
          value={form.password}
          onChange={handleChange}
          className="rounded-md border-none bg-gray-50"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute bottom-3 right-2"
        >
          {show ? <BsEyeSlash /> : <BsEye />}
        </button>
      </label>
      <button
        type="submit"
        className="rounded-md bg-green-600 px-6 py-2.5 font-sans text-sm font-semibold text-white"
      >
        ENTRAR
      </button>
      <p className="font-sans text-xs text-center">
        Ainda não sou cadastrado.{" "}
        <a className="cursor-pointer text-blue-100 underline" onClick={() => setRegister(true)}>Fazer cadastro</a>
      </p>
    </form>
  );
};

export default Login;
