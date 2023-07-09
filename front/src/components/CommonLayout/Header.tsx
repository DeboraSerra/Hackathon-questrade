"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { context } from "../../lib/context";
import HeaderMenu from "./HeaderMenu";
import logo from "../../assets/Questrade-Logo-Primary-Black-Medium.svg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { isLogged } = useContext(context);
  const router = useRouter();
  return (
    <div className=" h-[88px] w-full py-2 shadow-sm">
      <div className="container relative mx-auto flex h-full items-center justify-between">
        <Image
          src={logo}
          alt="Questrade"
          width={300}
          height={140}
          className="max-h-full w-auto cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        />
        <button
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-50"
          onClick={() => {
            if (isLogged) setOpenMenu(!openMenu);
          }}
        >
          {isLogged ? null : <AiOutlineUser className="text-4xl" />}
        </button>
        {openMenu && (
          <HeaderMenu setOpenMenu={setOpenMenu} openMenu={openMenu} />
        )}
      </div>
    </div>
  );
};

export default Header;
