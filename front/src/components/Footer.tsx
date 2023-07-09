import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-blue-900 py-4">
      <div className="container flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-8">
        <div className="flex flex-col gap-1 text-white max-sm:min-w-[150px]">
          <h2 className="mb-3 text-lg font-bold">Quem somos</h2>
          <Link
            className="text-sm hover:underline"
            href="https://www.questrade.com/"
          >
            Questrade
          </Link>
          <Link
            className="text-sm hover:underline"
            href="https://github.com/DeboraSerra"
          >
            Débora Serra
          </Link>
          <Link
            className="text-sm hover:underline"
            href="https://github.com/diegotimao"
          >
            Diego Cavalcanti
          </Link>
          <Link
            className="text-sm hover:underline"
            href="https://github.com/DouglasD18"
          >
            Douglas Aguiar
          </Link>
          <Link
            className="text-sm hover:underline"
            href="https://github.com/Marcio-Lembi-Teles"
          >
            Márcio Lembi
          </Link>
        </div>
        <div className="flex flex-col gap-1 text-white max-sm:min-w-[150px]">
          <h2 className="mb-3 text-lg font-bold">Nossas políticas</h2>
          <Link
            className="text-sm hover:underline"
            href="https://www.questrade.com/disclosure/privacy-policy-and-security/privacy-centre"
          >
            Política de privacidade
          </Link>
          <Link
            className="text-sm hover:underline"
            href="https://www.questrade.com/disclosure/legal-notice-and-disclosures"
          >
            Termos de uso
          </Link>
        </div>
        <div className="flex flex-col gap-1 text-white max-sm:min-w-[150px]">
          <h2 className="mb-3 text-lg font-bold">Redes sociais</h2>
          <Link
            className="flex items-center gap-2 text-sm hover:underline"
            href="https://www.youtube.com/user/Questrade"
          >
            <BsYoutube /> YouTube
          </Link>
          <Link
            className="flex items-center gap-2 text-sm hover:underline"
            href="https://www.instagram.com/questrade"
          >
            <BsInstagram /> Instagram
          </Link>
          <Link
            className="flex items-center gap-2 text-sm hover:underline"
            href="https://www.facebook.com/questrade"
          >
            <BsFacebook /> Facebook
          </Link>
          <Link
            className="flex items-center gap-2 text-sm hover:underline"
            href="https://twitter.com/questrade"
          >
            <BsTwitter /> Twitter
          </Link>
          <Link
            className="flex items-center gap-2 text-sm hover:underline"
            href="https://www.linkedin.com/company/questrade"
          >
            <BsLinkedin /> LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
