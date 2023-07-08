"use client";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, useEffect, useState } from "react";

const NewLoanForm = () => {
  const [form, setForm] = useState({
    loan: 0,
    quotas: 0,
    valueQuota: 0,
  });

  const router = useRouter();

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  useEffect(() => {
      setForm(prev => ({
        ...prev,
        valueQuota: form.quotas ? (form.loan / form.quotas) : form.loan
      }))
  }, [form.loan, form.quotas])

  const handleChange: ChangeEventHandler = (e) => {
    const { name } = e.target as HTMLInputElement;
    let { value } = e.target as HTMLInputElement;
    value = value.replace(/\D/g, "")
    setForm((prev) => ({
      ...prev,
      [name]: +value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-20 flex w-[400px] flex-col justify-between gap-6 border px-3 py-4 max-md:w-full max-md:px-5"
    >
      <h1 className="text-lg font-bold">Solicitar empréstimo</h1>
      <label
        htmlFor="loan"
        className="relative flex w-full flex-col gap-2 text-sm"
      >
        Valor do empréstimo
        <input
          type="text"
          name="loan"
          id="loan"
          value={form.loan}
          onChange={handleChange}
          className="rounded-md border-none bg-gray-50 pl-6"
        />
        <span className="absolute top-[38px] ml-1">R$</span>
      </label>
      <label htmlFor="quotas" className="flex flex-col gap-2 text-sm">
        Número de parcelas
        <input
          type="text"
          name="quotas"
          id="quotas"
          value={form.quotas}
          onChange={handleChange}
          className="rounded-md border-none bg-gray-50"
        />
      </label>
      <label
        htmlFor="valueQuota"
        className="relative flex flex-col gap-2 text-sm"
      >
        Valor da parcela
        <input
          type="text"
          name="valueQuota"
          id="valueQuota"
          value={form.valueQuota.toFixed(2).replace('.', ',')}
          onChange={handleChange}
          className="rounded-md border-none bg-gray-50 pl-6"
        />
        <span className="absolute top-[38px] ml-1">R$</span>
      </label>
      <button
        type="submit"
        className="rounded-md bg-green-600 px-6 py-2.5 font-sans text-sm font-semibold text-white"
      >
        SOLICITAR
      </button>
    </form>
  );
};

export default NewLoanForm;
