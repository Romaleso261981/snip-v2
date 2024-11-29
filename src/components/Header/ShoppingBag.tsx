import React, { FC } from "react";
import ShoppingBagIcon from "@/assets/mobMenu/fi-rs-shopping-bag.svg";

type ShoppingBagProps = {
  setIsOpenBascet: (isOpen: boolean) => void;
};

const ShoppingBag: FC<ShoppingBagProps> = ({ setIsOpenBascet }) => {
  return (
    <div className="relative" onClick={() => setIsOpenBascet(true)}>
      <div className="relative">
        <ShoppingBagIcon />
      </div>
    </div>
  );
};

export default ShoppingBag;
