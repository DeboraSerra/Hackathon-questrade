import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { policyColumn, socialsColumn, whoAreWeColumn } from "../utils/footerLinks";
import FooterColumn from "./FooterColumns";

const Footer = () => {
  return (
    <div className="bg-blue-900 py-4">
      <div className="container flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-8">
      <FooterColumn linksList={whoAreWeColumn} title="Quem somos" />
      <FooterColumn linksList={policyColumn} title="Nossa políticas" />
      <FooterColumn linksList={socialsColumn} title="Redes sociais" />
      </div>
    </div>
  );
};

export default Footer;
