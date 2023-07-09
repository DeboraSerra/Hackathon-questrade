"use client";
import {
  parseCpf,
  parsePhone,
  validateCpf,
  validatePassword,
} from "@/lib/helpers";
import { useRouter } from "next/navigation";
import {
  ChangeEventHandler,
  FormEventHandler,
  Suspense,
  useState,
} from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Spinner from "../CommonLayout/Spinner";

const Register = ({ setRegister }: { setRegister: (val: boolean) => void }) => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",
    phone: "",
    proofOfIncome: "",
  });
  const [hasError, setHasError] = useState<boolean | string>(false);

  const router = useRouter();

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  const handleChange: ChangeEventHandler = (e) => {
    const { name } = e.target as HTMLInputElement;
    let { value } = e.target as HTMLInputElement;
    if (name === "phone") {
      value = parsePhone(value);
    }
    if (name === "cpf") {
      const isValid = validateCpf(value);
      value = parseCpf(value);
      isValid ? setHasError(false) : setHasError("cpf");
      console.log({ name, value, isValid, hasError });
    }
    if (name === "password") {
      const isValid = validatePassword(value);
      !isValid ? setHasError("password") : setHasError(false);
    }
    if (name === "confirmPassword") {
      value !== form.password && setHasError("confirmPassword");
    }
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Suspense fallback={<Spinner />}>
      <form
        onSubmit={handleSubmit}
        className="my-3 flex w-[400px] flex-col justify-between gap-4 border px-3 py-4 max-sm:mx-3 max-sm:w-full"
      >
        <h2 className="text-lg font-bold">Cadastro</h2>
        <label htmlFor="name" className="flex flex-col gap-2 text-sm">
          Nome
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            className="rounded-md border-none bg-gray-50"
          />
        </label>
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
        <label htmlFor="cpf" className="relative flex flex-col gap-2 text-sm">
          CPF
          <input
            type="text"
            name="cpf"
            id="cpf"
            value={form.cpf}
            placeholder=" "
            onChange={handleChange}
            className={`rounded-md ${
              hasError === "cpf" ? "border-red-600" : "border-none"
            } bg-gray-50 focus:outline-none`}
          />
          {hasError === "cpf" && (
            <small className="lh-1 absolute -bottom-4">
              CPF precisa ser um número válido
            </small>
          )}
        </label>
        <label htmlFor="phone" className="flex flex-col gap-2 text-sm">
          Telefone
          <input
            type="text"
            name="phone"
            id="phone"
            value={form.phone}
            onChange={handleChange}
            className="rounded-md border-none bg-gray-50"
            maxLength={13}
          />
        </label>
        <label htmlFor="proofOfIncome" className="flex flex-col gap-2 text-sm">
          Comprovação de renda
          <input
            type="text"
            name="proofOfIncome"
            id="proofOfIncome"
            value={form.proofOfIncome}
            onChange={handleChange}
            className="rounded-md border-none bg-gray-50"
          />
        </label>
        <label
          htmlFor="password"
          className="relative flex flex-col gap-2 text-sm"
        >
          <h2 className="text-lg font-bold">Cadastro</h2>
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
          <label htmlFor="cpf" className="relative flex flex-col gap-2 text-sm">
            CPF
            <input
              type="text"
              name="cpf"
              id="cpf"
              value={form.cpf}
              placeholder=" "
              onChange={handleChange}
              className={`rounded-md ${
                hasError === "cpf" ? "border-red-600" : "border-none"
              } bg-gray-50 focus:outline-none`}
            />
            {hasError === "cpf" && (
              <small className="lh-1 absolute -bottom-4">
                CPF precisa ser um número válido
              </small>
            )}
          </label>
          <label htmlFor="phone" className="flex flex-col gap-2 text-sm">
            Telefone
            <input
              type="text"
              name="phone"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              className="rounded-md border-none bg-gray-50"
              maxLength={13}
            />
          </label>
          <label
            htmlFor="proofOfIncome"
            className="flex flex-col gap-2 text-sm"
          >
            Comprovação de renda
            <input
              type="text"
              name="proofOfIncome"
              id="proofOfIncome"
              value={form.proofOfIncome}
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
              className={`rounded-md ${
                hasError === "password" ? "border-red-600" : "border-none"
              } bg-gray-50`}
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-2 top-10"
            >
              {show ? <BsEyeSlash /> : <BsEye />}
            </button>
            {hasError === "password" && (
              <small className="lh-1 absolute -bottom-6">
                Senha precisa conter 1 letra minúscula, 1 letra maiúscula, 1
                número e 1 símbolo
              </small>
            )}
          </label>
          <label
            htmlFor="confirmPassword"
            className="relative flex flex-col gap-2 text-sm"
          >
            Confirmar Senha
            <input
              type={show ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className={`rounded-md ${
                hasError === "confirmPassword"
                  ? "border-red-600"
                  : "border-none"
              } bg-gray-50`}
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-2 top-10"
            >
              {show ? <BsEyeSlash /> : <BsEye />}
            </button>
            {hasError === "confirmPassword" && (
              <small className="lh-1 absolute -bottom-4">
                As senhas precisam ser iguais
              </small>
            )}
          </label>
          <button
            type="submit"
            className="rounded-md bg-green-600 px-6 py-2.5 font-sans text-sm font-semibold text-white"
          >
            CADASTRAR
          </button>
          {hasError === "password" && (
            <small className="lh-1 absolute -bottom-6">
              Senha precisa conter 1 letra minúscula, 1 letra maiúscula, 1
              número e 1 símbolo
            </small>
          )}
        </label>
        <label
          htmlFor="confirmPassword"
          className="relative flex flex-col gap-2 text-sm"
        >
          Confirmar Senha
          <input
            type={show ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className={`rounded-md ${
              hasError === "confirmPassword" ? "border-red-600" : "border-none"
            } bg-gray-50`}
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-2 top-10"
          >
            {show ? <BsEyeSlash /> : <BsEye />}
          </button>
          {hasError === "confirmPassword" && (
            <small className="lh-1 absolute -bottom-4">
              As senhas precisam ser iguais
            </small>
          )}
        </label>
        <button
          type="submit"
          className="rounded-md bg-green-600 px-6 py-2.5 font-sans text-sm font-semibold text-white"
        >
          CADASTRAR
        </button>
        <p className="text-center font-sans text-xs">
          Já sou cadastrado.{" "}
          <a
            className="cursor-pointer text-blue-100 underline"
            onClick={() => setRegister(false)}
          >
            Fazer login
          </a>
        </p>
      </form>
    </Suspense>
  );
};

export default Register;
