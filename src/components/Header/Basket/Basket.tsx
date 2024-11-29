"use client";

import { FC, useState } from "react";
import Image, { StaticImageData } from "next/image";

import image1 from "@/assets/BuyFromUs/img1.png";
import image2 from "@/assets/BuyFromUs/img1.png";

import cross from "@/assets/mobMenu/cross-mob-menu.png";
type Card = {
  id: number;
  image: string | StaticImageData;
  title: string;
  count: number;
  cost: number;
};

export const cards: Card[] = [
  {
    id: 1,
    image: image1,
    title: "ПАВУК “КЛАСИЧНИЙ”",
    count: 1,
    cost: 850
  },
  {
    id: 2,
    image: image2,
    title: "ПАВУК “КЛАСИЧНИЙ”",
    count: 1,
    cost: 850
  },
  {
    id: 3,
    image: image2,
    title: "ПАВУК “КЛАСИЧНИЙ”",
    count: 1,
    cost: 850
  }
];

const BasketData = {
  title: {
    ua: "У вашій корзині:",
    en: "In your basket:"
  },
  cost: {
    ua: "Ціна",
    en: "Cost"
  },
  curensu: {
    ua: "грн.",
    en: "uah"
  },
  count: {
    ua: "К-сть",
    en: "Count"
  },
  cardButton: {
    ua: "Видалити",
    en: "Delete"
  },
  bottomButton: {
    ua: "Оформити замовлення",
    en: "Order"
  }
};

type BasketProps = {
  cards: Card[];
  setIsOpenBascet: (isOpen: boolean) => void;
};

const Basket: FC<BasketProps> = ({ cards, setIsOpenBascet }) => {
  const [bacetCards, setBacetCards] = useState<Card[]>([...cards]);

  const getTotalCout = (cards: Card[]) => {
    return cards.reduce((acc, card) => acc + card.cost, 0);
  };

  const removeCardById = (cards: Card[], id: number) => {
    const newCards = cards.filter(card => card.id !== id);
    setBacetCards(newCards);
  };

  return (
    <div className="absolute w-full top-0 right-0 p-10 z-20 bg-white md:w-1/3 md:top-1 md:right-1">
      <div className="flex flex-col justify-between items-start text-center p-4 pb-8">
        <div
          className="flex gap-5 flex-row-reverse mb-14"
          onClick={() => setIsOpenBascet(false)}
        >
          <Image src={cross} alt="cross" />
        </div>
        <h2 className="mb-5 text-xl">
          {BasketData.title.ua}
        </h2>
        <div className="flex flex-col justify-start items-start">
          {bacetCards.map((card, index) =>
            <div
              key={index}
              className="flex justify-between items-center w-full mb-5 border-gold border-b-2 pb-4"
            >
              <div className="w-1/3 flex flex-row justify-between">
                <Image src={card.image} alt="image" />
              </div>
              <div className="w-full h-full flex pl-4 flex-col  items-start">
                <p className="pb-8">
                  {card.title}
                </p>
                <div className="w-2/3 flex flex-row pb-1">
                  <h4>
                    {BasketData.count.ua}
                  </h4>
                  <div className="flex flex-row items-center gap-2 px-4">
                    <button>+</button>
                    <p>
                      {card.count}
                    </p>
                    <button>-</button>
                  </div>
                </div>
                <div className="flex flex-row pb-3 gap-2">
                  <h4>
                    {BasketData.cost.ua}
                  </h4>
                  <p>
                    {card.cost}
                  </p>
                  <span>
                    {BasketData.curensu.ua}
                  </span>
                </div>
                <button onClick={() => removeCardById(cards, card.id)}>
                  {BasketData.cardButton.ua}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-32">
        <div className="flex flex-row py-4">
          <h4>До сплати:</h4>
          <p>
            {getTotalCout(bacetCards)}
          </p>
          <span>грн</span>
        </div>
        <button className="flex justify-center items-center w-[80%] h-12 bc text-md bg-gold text-[#fff]">
          {BasketData.bottomButton.ua}
        </button>
      </div>
    </div>
  );
};

export default Basket;
