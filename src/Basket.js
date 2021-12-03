import React from "react";
import { useStateValue } from "./StateProvider";
import { Product } from "./Product";
import "./Basket.css";
import { BasketProduct } from "./BasketProduct";
import SubTotal from "./SubTotal"

export function Basket() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="basket">
    <div className="basket_left">
    <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Dec21/Rs1Deal/HUB_PC.jpg"
        alt="add"
        className="basket_add"
      />

      {basket.length == 0 ? (
        <div>
          <h2 >Your basket is empty,Click Add button to add  your list</h2>
        </div>
      ) : (
        <div>
          <h2 >Your basket </h2>
          {basket.map((value) => {
            const { id, title, price, rating, image } = value;
            return (
              <>
                <BasketProduct
                  id={id}
                  title={title}
                  price={price}
                  rating={rating}
                  image={image}
                />
              </>
            );
          })}
        </div>
      )}
    </div>
     <div className="basket_right">
       {basket.length>0 && (<div> 
      
       <SubTotal/>
       </div>)}
     </div>
    </div>
  );
}
