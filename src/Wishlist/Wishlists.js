import React from "react";
import "./Wishlists.css";
import Wishlist from "./Wishlist";
import { useStateValue } from "../React Context API/StateProvider";

function Wishlists() {
  const [{ wishlist }, dispatch] = useStateValue();

  return (
    <div className="wishlists">
      <h1>Your Wishlisted Items</h1>

      {wishlist.map((item) => {
        return (
          <Wishlist
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        );
      })}
    </div>
  );
}

export default Wishlists;
