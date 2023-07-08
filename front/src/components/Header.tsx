import logo from "@/assets/Questrade-Logo-Primary-Black-Medium.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex h-[88px] w-full shadow-sm justify-between">
        <Image
          src={logo}
          alt="Questrade"
          width={300}
          height={140}
          className="max-h-full"
        />
    </div>
  );
};

export default Header;
