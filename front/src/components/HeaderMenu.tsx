"use client";
import { context } from "@/lib/context";
import Link from "next/link";
import React, { MouseEventHandler, useContext, useEffect, useRef } from "react";

const HeaderMenu = ({
  setOpenMenu,
  openMenu,
}: {
  setOpenMenu: (val: boolean) => void;
  openMenu: boolean;
}) => {
  const { setIsLogged } = useContext(context)
  const menu = useRef<HTMLDivElement>(null);

  return (
    <div
      className="absolute right-0 top-[80px] flex w-[100px] flex-col rounded-sm bg-white p-2 shadow-md"
      ref={menu}
    >
      <Link href="/profile" className="text-gray-900 hover:underline">
        Perfil
      </Link>
      <Link href="/" className="text-gray-900 hover:underline" onClick={() => setIsLogged(false)}>
        Sair
      </Link>
    </div>
  );
};

export default HeaderMenu;
