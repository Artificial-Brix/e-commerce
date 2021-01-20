import React from "react";
import card from "./card.module.scss";
import { FiBookmark } from "react-icons/fi";
import { useParams } from "react-router-dom";

export default function Card({ name, price, image }) {
  let { cardId } = useParams();

  return (
    <div className={card.container}>
      <img className={card.image} src={image} />
      <p className={card.name}>{name}</p>
      <div className={card.lowerSection}>
        <p className={card.price}>₹{price}</p>
        <FiBookmark className={card.icon} />
      </div>
    </div>
  );
}
