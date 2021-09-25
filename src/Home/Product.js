import React, { useState } from "react";
import { useStateValue } from "../React Context API/StateProvider";
import "./Product.css";
import BookmarksOutlinedIcon from "@material-ui/icons/BookmarksOutlined";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const handleWishlist = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TO_WISHLIST",
      wishlist: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
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
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>⭐</p>;
            })}
        </div>
      </div>

      <img src={image} alt="" />

      <div className="product__buttons">
        <button onClick={addToBasket}>Add to Basket</button>
        <BookmarksOutlinedIcon
          onClick={handleWishlist}
          fontSize="small"
          className="product__wishlist"
        />
      </div>
    </div>
  );
}

export default Product;
