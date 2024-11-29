"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import clsx from "clsx";

import { Routes } from "@/const/routes";
import MobileMenu from "./MobileMenu";
import BurgerMenuIcon from "@/assets/icons/burger-menu.svg";

import LogoIcon from "@/assets/icons/logo.svg";

import Basket, { cards } from "./Basket/Basket";
import ShoppingBag from "./ShoppingBag";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const [isOpenBascet, setIsOpenBascet] = useState<boolean>(true);

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const t = useTranslations("Header");

  const isUaActive = pathname.includes("/ua");
  const isEnActive = pathname.includes("/en");

  const handleLocaleChange = (locale: "ua" | "en") => {
    const pathWithoutLocale = pathname.split("/").slice(2).join("/");

    const query = searchParams.toString();
    const queryString = query ? `?${query}` : "";

    router.push(`/${locale}/${pathWithoutLocale}${queryString}`);
  };

  return (
    <div className="w-full flex justify-between items-center h-16 px-6 relative">
      <div onClick={() => setIsOpen(true)}>
        <BurgerMenuIcon className="cursor-pointer" />
      </div>
      <Link href={Routes.Home} className="flex flex-col items-center">
        <LogoIcon className="w-9 h-9" />
        <span className="text-gold text-xs">
          {t("title")}
        </span>
      </Link>
      <div className="flex gap-2 text-md text-gold cursor-pointer">
        {cards.length > 0 && <ShoppingBag setIsOpenBascet={setIsOpenBascet} />}
        <span
          onClick={() => handleLocaleChange("ua")}
          className={clsx("hover:underline", isUaActive && "font-bold")}
        >
          UA
        </span>
        |
        <span
          onClick={() => handleLocaleChange("en")}
          className={clsx("hover:underline", isEnActive && "font-bold")}
        >
          EN
        </span>
      </div>
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      {isOpenBascet &&
        <Basket cards={cards} setIsOpenBascet={setIsOpenBascet} />}
    </div>
  );
};

export default Header;
