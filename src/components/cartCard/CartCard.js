import React from "react";
import cc from "./cartCard.module.scss";

export default function CartCard({ image, name, price, quantity }) {
  return (
    <div className={cc.ctr}>
      <img className={cc.image} src={image} />
      <p className={cc.name}>{name}</p>
      <div className={cc.pri_qnt}>
        <p className={cc.price}>₹{price}</p>
        <p className={cc.qnt}>
          quantity: &nbsp; <button className={cc.AR}>+</button> &nbsp;{" "}
          {quantity} &nbsp; <button className={cc.AR}>-</button>
        </p>
      </div>
    </div>
  );
}
