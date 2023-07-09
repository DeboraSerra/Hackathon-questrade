"use client";
import { context } from "@/lib/context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChangeEventHandler,
  FormEventHandler,
  Suspense,
  useContext,
  useEffect,
  useState,
} from "react";
import Spinner from "./CommonLayout/Spinner";
import { parsePhone } from "@/lib/helpers";

const EditProfile = () => {
  const {
    userInfo: { name, email, phone, cpf },
    updateProfile,
  } = useContext(context);
  const [form, setForm] = useState({
    name,
    email,
    phone,
    cpf,
  });
  const [error, setError] = useState('')

  const router = useRouter();

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      cpf: form.cpf.replace(/\W/g, ''),
    }
    const response = await updateProfile(payload)
    if (response) {
      setError(response)
      return
    }
    router.push("/dashboard");
  };

  useEffect(() => {}, []);

  const handleChange: ChangeEventHandler = (e) => {
    setError('')
    const { name } = e.target as HTMLInputElement;
    let { value } = e.target as HTMLInputElement;
    if (name === 'phone') {
      value = parsePhone(value)
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
        className="mt-20 flex w-[400px] flex-col justify-between gap-6 border px-3 py-4 max-md:w-full max-md:px-5 relative"
      >
        {error? <small className="absolute bottom-1">{error}</small> : null}
        <h1 className="text-lg font-bold">Atualizar dados cadastrais</h1>
        <label
          htmlFor="name"
          className="relative flex w-full flex-col gap-2 text-sm"
        >
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
        <label htmlFor="text" className="flex flex-col gap-2 text-sm">
          Telefone
          <input
            type="text"
            name="phone"
            id="phone"
            value={form.phone}
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
            onChange={handleChange}
            className="rounded-md border-none bg-gray-50 disabled:bg-gray-100/70"
            disabled
          />
        </label>
        <div className="flex">
          <Link
            href="/dashboard"
            className="mr-2 rounded-md bg-gray-200 px-6 py-2.5 font-sans text-sm font-semibold text-gray-600"
          >
            CANCELAR
          </Link>
          <button
            type="submit"
            className="grow rounded-md bg-green-600 px-6 py-2.5 font-sans text-sm font-semibold text-white"
          >
            ATUALIZAR
          </button>
        </div>
      </form>
    </Suspense>
  );
};

export default EditProfile;
