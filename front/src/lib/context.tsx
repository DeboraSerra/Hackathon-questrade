"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginPayload, RegisterPayload, UpdateProfilePayload } from "./interfaces";
import { api } from "./api";
import { getUser } from "./auth";
import { parseCpf } from './helpers';

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
  login: (payload: LoginPayload) => {},
  register: (payload: RegisterPayload) => {},
  updateProfile: (payload: UpdateProfilePayload) => {},
});

export default function Provider({ children }: { children: ReactNode }) {
  const [isLogged, setIsLogged] = useState(false);
  const [paymentList, setPaymentList] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    totalPayed: 0,
    payedQuotas: 0,
    totalQuotas: 0,
    total: 0,
  });

  useEffect(() => {
    saveUserInfo()
  }, [])

  const saveUserInfo = () => {
    const user = getUser()
    if (!user) {
      setIsLogged(false)
      return null
    }
    setUserInfo({
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      cpf: parseCpf(user.cpf),
    })
  }

  const login = async (payload: LoginPayload) => {
    const { data: { token } } = await api.post('/user/login', payload)
    localStorage.setItem('token', token)
    setIsLogged(true)
    saveUserInfo()
  }

  const register = async (payload: RegisterPayload) => {
    const { data: { token } } = await api.post('/user/register', payload)
    localStorage.setItem('token', token)
    setIsLogged(true)
    saveUserInfo()
  }

  const updateProfile = async (payload: UpdateProfilePayload) => {
    const { cpf, ...user } = payload;
    await api.put(`/user/${cpf}`, user)
  }

  const value = {
    isLogged,
    setIsLogged,
    paymentList,
    userInfo,
    paymentInfo,
    login,
    register,
    updateProfile,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
}
