import React from "react";
import CartCard from "../components/cartCard/CartCard";
import cart from "./cart.module.scss";

export default function Cart() {
  const total = 5000;
  const items = 4;
  return (
    <div className={cart.ctr}>
      <div>
        <CartCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklcDDg1RwqUY92PV_CB037kSZsX2PW4HH4woFq6COo_yi3mEFQVpMH578zfJUFKXEZy7I58Q&usqp=CAc"
          }
          name={
            "boAt Rockerz 370 Wireless Headphone with Bluetooth 5.0, Immersive Audio, Lightweight Ergonomic Design, Cosy Padded Earcups and Up to 8H Playback"
          }
          price={1399}
          quantity={4}
        />
        <CartCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklcDDg1RwqUY92PV_CB037kSZsX2PW4HH4woFq6COo_yi3mEFQVpMH578zfJUFKXEZy7I58Q&usqp=CAc"
          }
          name={
            "boAt Rockerz 370 Wireless Headphone with Bluetooth 5.0, Immersive Audio, Lightweight Ergonomic Design, Cosy Padded Earcups and Up to 8H Playback"
          }
          price={1399}
          quantity={4}
        />
      </div>
      <div className={cart.checkout}>
        <p className={cart.quote}>Happy shopping!</p>
        <p className={cart.total}>Subtotal: ₹{total}</p>
        <p className={cart.items}>items: {items}</p>
        <button className={cart.c_btn}>checkout</button>
      </div>
    </div>
  );
}
