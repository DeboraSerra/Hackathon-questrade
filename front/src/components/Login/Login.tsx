"use client";
import { context } from "@/lib/context";
import { useRouter } from "next/navigation";
import {
  ChangeEventHandler,
  FormEventHandler,
  Suspense,
  useContext,
  useState,
} from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Spinner from "../CommonLayout/Spinner";
import Register from "./Register";

const Login = () => {
  const [show, setShow] = useState(false);
  const [register, setRegister] = useState(false);
  const [form, setForm] = useState({
    cpf: "",
    password: "",
  });
  const { setIsLogged } = useContext(context);

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
    return <Register setRegister={setRegister} />;
  }

  return (
    <Suspense fallback={<Spinner />}>
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex w-[400px] flex-col justify-between gap-10 border px-3 py-4 max-sm:mx-3 max-sm:w-full"
      >
        <h2 className="text-lg font-bold">Login</h2>
        <label htmlFor="cpf" className="flex flex-col gap-2 text-sm">
          CPF
          <input
            type="text"
            name="cpf"
            id="cpf"
            value={form.cpf}
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
        <p className="text-center font-sans text-xs">
          Ainda não sou cadastrado.{" "}
          <a
            className="cursor-pointer text-blue-100 underline"
            onClick={() => setRegister(true)}
          >
            Fazer cadastro
          </a>
        </p>
      </form>
    </Suspense>
  );
};

export default Login;
