import React from "react";
import classes from "./cards.module.scss";
import Card from "./card/Card";
import { Link } from "react-router-dom";

const data = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklcDDg1RwqUY92PV_CB037kSZsX2PW4HH4woFq6COo_yi3mEFQVpMH578zfJUFKXEZy7I58Q&usqp=CAc",
    name:
      "boAt Rockerz 370 Wireless Headphone with Bluetooth 5.0, Immersive Audio, Lightweight Ergonomic Design, Cosy Padded Earcups and Up to 8H Playback",
    price: 1399,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJI-2l7d_RMVuS4yUNuyHcO51BIZ8DWZwblIUToLW-Q6VngQ93oynipoTr8h7ZaOJaxdl_stY&usqp=CAc",
    name: "boAt Bassheads 152 in Ear Wired Earphones with Mic(Jazzy Blue)",
    price: 499,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToyZSr6f2JyPwhkAszv26Qm9uQorWNRPpA3_lC-JScazVw1FNvo0OfAN0yXGEZHb_gaUeIEEE&usqp=CAc",
    name: "boAt Rockerz 450 Bluetooth On-Ear Headphone with Mic(Aqua Blue)",
    price: 1499,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt9GDO-LeBdZ01YrHSjoG6mVxnWuA6lbZrCFMCn9eXw6k8DYLefsdcv02poME6N5WqIRRl0_M&usqp=CAc",
    name: "boAt Rockerz 400 Bluetooth Headphones ...",
    price: 1399,
  },
];

function Cards() {
  return (
    <div className={classes.cardContainer}>
      {data.map(({ name, price, image }, i) => {
        return (
          <Link to={`/cards/${i}`}>
            <Card key={i} name={name} price={price} image={image} />
          </Link>
        );
      })}
    </div>
  );
}

export default Cards;
