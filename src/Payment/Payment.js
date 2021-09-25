import React from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import { db } from "../firebase";
import { getBasketTotal } from "../React Context API/reducer";
import { useStateValue } from "../React Context API/StateProvider";
import "./Payment.css";

function Payment() {
  const [{ basket, user, address }, dispatch] = useStateValue();

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    db.collection("users")
      .doc(user?.uid)
      .set({
        basket: basket,
        amount: getBasketTotal(basket),
      });

    dispatch({
      type: "EMPTY_BASKET",
    });

    history.replace("/orders");
  };

  const handleBuy = () => {};

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>{address}</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payment__items">
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
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <div>
                      <h3>Order Total: {value}</h3>
                    </div>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button onClick={handleBuy}>Buy Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
