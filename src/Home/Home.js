import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61Q+Jb7TLRL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="Echo Dot (4th Gen, 2020 release)| #1 smart speaker brand in India with Alexa (Black)"
            price={4499.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61KIy6gX-CL._SL1000_.jpg"
          />
          <Product
            title="ROG Strix GA35, AMD Ryzen 7-3700X Gaming Desktop  NVIDIA GeForce RTX 2070 "
            price={159990.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Fw78HXVaS._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            title="Amazon Brand - Solimo XXXL Bean Bag Cover (Black with Pink Piping)"
            price={929.5}
            rating={4}
            image="https://m.media-amazon.com/images/I/91PjQLbk8vL._SL1500_.jpg"
          />
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={478.0}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/51aEhyjQGrL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          <Product
            title="PowerMax Fitness TDM-100M (2.0HP) Motorized Foldable Electric Treadmill (Black)"
            price={31049.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/813dvRVB0XL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
            price={69999.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
