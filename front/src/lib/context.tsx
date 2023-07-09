'use client'
import { ReactNode, createContext, useState } from "react";

interface ListInterface {
  description: string;
  dueDate: Date | string;
  value: number;
  status: "pending" | "payed" | "expired" | "default";
}

const mockList: ListInterface[]  = [
  {
    description: 'Parcela referente a Maio',
    dueDate: '10/05/2023',
    value: 6000,
    status: 'payed',
  },
  {
    description: 'Parcela referente a Junho',
    dueDate: '10/06/2023',
    value: 6000,
    status: 'expired',
  },
  {
    description: 'Parcela referente a Julho',
    dueDate: '10/07/2023',
    value: 6000,
    status: 'pending',
  },
  {
    description: 'Parcela referente a Agosto',
    dueDate: '10/08/2023',
    value: 6000,
    status: 'default',
  },
]


export const context = createContext({
  isLogged: false,
  setIsLogged: (val: boolean) => {},
  paymentList: [] as ListInterface[],
});

export default function Provider({ children }: { children: ReactNode }) {
  const [isLogged, setIsLogged] = useState(true)
  const [paymentList, setPaymentList] = useState([])
  
  const value = {
    isLogged,
    setIsLogged,
    paymentList,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
}
