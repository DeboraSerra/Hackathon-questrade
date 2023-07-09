"use client";
import { ReactNode, createContext, useState } from "react";

interface ListInterface {
  description: string;
  dueDate: Date | string;
  value: number;
  status: "pending" | "payed" | "expired" | "default";
}

const mockList: ListInterface[] = [
  {
    description: "Parcela referente a Maio",
    dueDate: "10/05/2023",
    value: 6000,
    status: "payed",
  },
  {
    description: "Parcela referente a Junho",
    dueDate: "10/06/2023",
    value: 6000,
    status: "expired",
  },
  {
    description: "Parcela referente a Julho",
    dueDate: "10/07/2023",
    value: 6000,
    status: "pending",
  },
  {
    description: "Parcela referente a Agosto",
    dueDate: "10/08/2023",
    value: 6000,
    status: "default",
  },
];

export const context = createContext({
  isLogged: false,
  setIsLogged: (val: boolean) => {},
  paymentList: [] as ListInterface[],
  userInfo: { name: "", email: "", phone: "", cpf: "" },
  paymentInfo: { totalPayed: 0, payedQuotas: 0, totalQuotas: 0, total: 0 },
});

export default function Provider({ children }: { children: ReactNode }) {
  const [isLogged, setIsLogged] = useState(true);
  const [paymentList, setPaymentList] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: "Diego Cavalcanti",
    email: "diego.cavalcanti@mail.com",
    phone: "11 98765-4321",
    cpf: "000.000.000-00",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    totalPayed: 0,
    payedQuotas: 0,
    totalQuotas: 0,
    total: 0,
  });

  const value = {
    isLogged,
    setIsLogged,
    paymentList,
    userInfo,
    paymentInfo,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
}
