'use client'
import { ChangeEventHandler, useContext, useState } from "react";
import PaymentCard from "./PaymentCard";
import { context } from "@/lib/context";



const Payments = () => {
  const { paymentList } = useContext(context);
  const [list, setList] = useState(paymentList)

  const handleChange: ChangeEventHandler = (e) => {
    const value = (e.target as HTMLSelectElement).value
    let newList = []
    if (['pending', 'payed', 'expired'].includes(value)) {
      newList = paymentList.filter(({ status }) => status === value)
      console.log({ value, newList })
    } else newList = paymentList
    setList(newList)
  }
  return (
    <div className="max-w-7xl mx-auto items-center h-40 p-10">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-2xl">Faturas</h1>
          <select name="" id="" className="w-[255px] rounded-md font-medium" onChange={handleChange}>
            <option value="">Filtrar</option> 
            <option value="payed">Faturas pagas</option>
            <option value="pending">Faturas pendentes</option>
            <option value="expired">Faturas atrasada</option>
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
  )
}

export default Payments;