"use client";
import { useViewport } from "@/lib/useViewport";
import { NextPage } from "next";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface Props {
  linksList: { text: string; link: string; icon?: ReactNode }[];
  title: string;
}

const FooterColumn: NextPage<Props> = ({ linksList, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useViewport();
  return (
    <div className="flex flex-col gap-1 text-white max-sm:min-w-[150px]">
      <h2
        className="mb-3 text-lg font-bold max-sm:flex max-sm:w-full max-sm:cursor-pointer max-sm:items-center max-sm:justify-center max-sm:gap-2 max-sm:text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {width < 640 && (!isOpen ? <BsChevronDown /> : <BsChevronUp />)}
      </h2>
      {width > 640 || isOpen
        ? linksList.map(({ text, link, icon }, index) => (
            <Link
              key={index}
              href={link}
              className={
                icon
                  ? "flex items-center gap-2 text-sm hover:underline"
                  : "text-sm hover:underline"
              }
            >
              {icon ?? null} {text}
            </Link>
          ))
        : null}
    </div>
  );
};

export default FooterColumn;
