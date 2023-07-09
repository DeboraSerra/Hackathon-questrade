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
import { parseCpf, validateCpf } from "@/lib/helpers";

const Login = () => {
  const [show, setShow] = useState(false);
  const [register, setRegister] = useState(false);
  const [form, setForm] = useState({
    cpf: "",
    password: "",
  });
  const [error, setError] = useState('')
  const { login } = useContext(context);

  const router = useRouter();

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    const isValidCpf = validateCpf(form.cpf)
    if (!isValidCpf) {
      setError('Digite um cpf válido')
      return
    }
    const payload = {
      cpf: form.cpf.replace(/\W/g, ''),
      password: form.password,
    }
    const response = await login(payload)
    if (response) {
      setError(response)
      return
    }
    router.push("/dashboard");
  };

  const handleChange: ChangeEventHandler = (e) => {
    setError('')
    const { name } = e.target as HTMLInputElement;
    let { value } = e.target as HTMLInputElement;
    if (name === 'cpf') {
      value = parseCpf(value)
    }
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (register) {
    return <Register setRegister={setRegister} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex w-[400px] flex-col justify-between gap-10 border px-3 py-4 max-sm:mx-3 max-sm:w-full relative"
    >
      <h2 className="text-lg font-bold">Login</h2>
      {error? <small className="absolute bottom-32">{error}</small> : null}
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
  );
};

export default Login;
