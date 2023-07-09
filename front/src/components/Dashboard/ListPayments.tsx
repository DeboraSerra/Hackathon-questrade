"use client";
import { context } from "@/lib/context";
import { ChangeEventHandler, useContext, useState } from "react";
import PaymentCard from "./PaymentCard";

const Payments = () => {
  const { paymentList } = useContext(context);
  const [list, setList] = useState(paymentList);

  const handleChange: ChangeEventHandler = (e) => {
    const value = (e.target as HTMLSelectElement).value;
    let newList = [];
    if (["pending", "payed", "expired"].includes(value)) {
      newList = paymentList.filter(({ status }) => status === value);
      console.log({ value, newList });
    } else newList = paymentList;
    setList(newList);
  };
  return (
    <div className="mx-auto max-w-7xl items-center p-10">
      <div className="flex items-center justify-between max-sm:flex-wrap-reverse">
        <h1 className="text-2xl font-semibold">Faturas</h1>
        <select
          name=""
          id=""
          className="w-[255px] cursor-pointer rounded-md font-medium max-sm:mb-4"
          onChange={handleChange}
        >
          <option value="" className="cursor-pointer">
            Filtrar
          </option>
          <option value="payed" className="cursor-pointer">
            Faturas pagas
          </option>
          <option value="pending" className="cursor-pointer">
            Faturas pendentes
          </option>
          <option value="expired" className="cursor-pointer">
            Faturas atrasada
          </option>
        </select>
      </div>
      <div className="">
        <ul className="mt-6">
          {list.map((item, index) => (
            <PaymentCard {...item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Payments;
