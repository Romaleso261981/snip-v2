"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Routes } from "@/const/routes";
import cross from "@/assets/mobMenu/cross-mob-menu.png";

type MobMenuProps = {
  setIsOpen: (value: boolean) => void;
};

const MobMenu: FC<MobMenuProps> = ({ setIsOpen }) => {
  const menuItems = [
    { id: 1, name: "Зроби сам", href: Routes.DoItYourself },
    { id: 2, name: "Купи в нас", href: Routes.ByFromUs },
    { id: 3, name: "Запроси нас", href: Routes.InviteUs }
  ];

  return (
    <div className="absolute w-full top-0 left-0 p-5 z-20 bg-white">
      <div className="flex flex-col justify-between items-start text-center p-4 pb-8">
        <div
          className="flex gap-5 flex-row-reverse mb-14"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-gold font-bold">Menu</span>
          <Image src={cross} alt="cross" />
        </div>
        <div className="flex flex-col justify-start items-start mb-40">
          <ul className="flex flex-col justify-center items-start text-gold">
            {menuItems.map(item =>
              <li
                key={item.id}
                className="width-[80px] height-[22px] pb-3 hover:translate-x-1 duration-300"
                onClick={() => setIsOpen(false)}
              >
                <Link href={item.href} className="cursor-pointer">
                  {item.name}
                </Link>
              </li>
            )}
          </ul>
          <div
            className="text-gold flex flex-col justify-center items-start pt-3 border-t-gold border-t-2 w-56 "
            onClick={() => setIsOpen(false)}
          >
            <Link
              href={Routes.AboutUs}
              className="cursor-pointer hover:translate-x-1 duration-300"
            >
              Про нас
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <nav className="flex flex-col justify-start items-start text-gold">
            <h3 className="width-[80px] height-[22px] mb-[24px] text-gold font-montserrat font-weight-500 leading-19.2px text-center">
              Контакти:
            </h3>
            <Link
              href="/ua/contact"
              className="text-gold font-montserrat font-weight-500 leading-19.2px mb-2"
            >
              Тел: +380 67 435 82 00
            </Link>
            <Link
              href="/ua/contact"
              className="text-gold font-montserrat font-weight-500 leading-19.2px"
            >
              Gmail: snip.solomy@gmail.com
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobMenu;
