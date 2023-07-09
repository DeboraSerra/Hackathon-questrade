"use client";
import { context } from "@/lib/context";
import Link from "next/link";
import { useContext, useEffect, useRef } from "react";

const HeaderMenu = ({
  setOpenMenu,
  openMenu,
}: {
  setOpenMenu: (val: boolean) => void;
  openMenu: boolean;
}) => {
  const { setIsLogged } = useContext(context);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (menu.current && !menu.current.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [setOpenMenu]);

  return (
    <div
      className="absolute right-0 top-[60px] flex w-[100px] flex-col rounded-sm bg-white p-2 shadow-md"
      ref={menu}
    >
      <Link href="/profile" className="text-gray-900 hover:underline" onClick={() => setTimeout(() => { setOpenMenu(false)}, 200)}>
        Perfil
      </Link>
      <Link
        href="/"
        className="text-gray-900 hover:underline"
        onClick={() => {
          setIsLogged(false)
          setTimeout(() => { setOpenMenu(false)}, 100)
        }}
      >
        Sair
      </Link>
    </div>
  );
};

export default HeaderMenu;
