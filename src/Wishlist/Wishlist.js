import React from "react";
import { useStateValue } from "../React Context API/StateProvider";
import "./Wishlist.css";

function Wishlist({ id, image, title, rating, price }) {
  const [{ wishlist }, dispatch] = useStateValue();

  const removeFromWishlist = () => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      id: id,
    });
  };

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="wishlist">
      <img className="wishlist__image" src={image} alt="" />
      <div className="wishlist__info">
        <p className="wishlist__title">{title}</p>
        <p className="wishlist__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="wishlist__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>⭐</p>;
            })}
        </div>

        <button onClick={removeFromWishlist}>Remove from Wishlist</button>
        <button className="basket__button" onClick={addToBasket}>
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Wishlist;
