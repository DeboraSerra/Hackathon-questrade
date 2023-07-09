"use client";
import logo from "../assets/Questrade-Logo-Primary-Black-Medium.svg";
import { context } from "../lib/context";
import Image from "next/image";
import { useContext } from "react";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  const { isLogged } = useContext(context);
  return (
    <div className="h-[88px] w-full  px-20 py-2 shadow-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        <Image
          src={logo}
          alt="Questrade"
          width={300}
          height={140}
          className="max-h-full w-auto"
        />
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-50">
          {isLogged ? null : <AiOutlineUser className="text-4xl" />}
        </div>
      </div>
    </div>
  );
};

export default Header;
