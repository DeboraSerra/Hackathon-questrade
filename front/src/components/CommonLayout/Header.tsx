"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { context } from "../../lib/context";
import HeaderMenu from "./HeaderMenu";
import logo from "../../assets/logo-questrade.png";
import prifileUser from "../../assets/prifile-user.png";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const {
    isLogged,
    userInfo: { name },
  } = useContext(context);
  const router = useRouter();
  return (
    <div className=" h-[75px] w-full py-2 shadow-sm">
      <div className="container relative mx-auto flex h-full items-center justify-between">
        <Image
          src={logo}
          alt="Questrade"
          width={300}
          height={90}
          className="max-h-full w-auto cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        />
        <button
          className={`flex items-center justify-center gap-2 rounded-full ${!isLogged ? 'bg-slate-200 h-11 w-11' : ''}`}
          onClick={() => {
            if (isLogged) setOpenMenu(!openMenu);
          }}
        >
          {isLogged ? (
            <>
              <span className="font-semibold">{name}</span>
              <Image
                src={prifileUser}
                className="h-11 w-11"
                alt="Profile user"
              />
            </>
          ) : (
            <AiOutlineUser className="text-4xl" />
          )}
        </button>
        {openMenu && (
          <HeaderMenu setOpenMenu={setOpenMenu} openMenu={openMenu} />
        )}
      </div>
    </div>
  );
};

export default Header;
