import React from "react";
import { useStateValue } from "../React Context API/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dipatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div className="checkout__title">
          <h2>Your Shopping Basket</h2>
        </div>

        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <img
          className="subtotal__logo"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
          alt=""
        />
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
