'use client'
import { ReactNode, createContext, useState } from "react";

export const context = createContext({
  isLogged: false,
  setIsLogged: (val: boolean) => {}
});

export default function Provider({ children }: { children: ReactNode }) {
  const [isLogged, setIsLogged] = useState(false)
  const value = {
    isLogged,
    setIsLogged,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
}
