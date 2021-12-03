import React from "react";
import "./Home.css";
import { Product } from "./Product";
export const Home = () => {
  return (
    <div className="Home">
      <img
        className="home_image"
        src="https://m.media-amazon.com/images/I/71-4+6068OL._SX3000_.jpg"
        alt="amazonprime"
      />
      {/* product */}
      <div className="home_row">
        <Product
          id="966"
          title="Bluetooth"
          price={896}
          rating={5}
          image="https://m.media-amazon.com/images/I/519Jdmsh+yL._AC_UL320_.jpg"
        />

        <Product
          id="967"
          title="wretcher"
          price={(11, 896)}
          rating={5}
          image="	https://m.media-amazon.com/images/I/61qA3nU0FZL._AC_UL320_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="968"
          title="Watch"
          price={(11, 896)}
          rating={5}
          image="https://m.media-amazon.com/images/I/61xzuXWWozS._AC_UL320_.jpg"
        />

        <Product
          id="969"
          title="Pad"
          price={(11, 896)}
          rating={5}
          image="https://m.media-amazon.com/images/I/51GvkrMzQyL._AC_UL320_.jpg"
        />

        <Product
          id="970"
          title="Mobile"
          price={(11, 896)}
          rating={5}
          image="https://m.media-amazon.com/images/I/41hN0FP7mOL._AC_UL320_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="971"
          title="Tool Box"
          price={(11, 896)}
          rating={3}
          image="https://m.media-amazon.com/images/I/61sygDYhK2L._AC_UL320_.jpg"
        />
      </div>
    </div>
  );
};
