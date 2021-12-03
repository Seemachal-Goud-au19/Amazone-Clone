import React from 'react'
import "./BasketProduct.css";
import { useStateValue } from './StateProvider';

export const BasketProduct = ({id,title,price,rating,image}) => {
      const[{basket},dispatch]=useStateValue();
    let RemovefromBasket=()=>{
           dispatch({
               type:"REMOVE_FROM_BASKET",
               id:id,
               
           }) 
    }
    return (
        <div className="basket_Product">
        <img  className="basketproduct_Image" src={image} alt={title} />

        <div className="basket_productInfo">
        <p className="basket_producttitle">{title}</p>  
          <p className="basketproduct_price">
              <small>$</small>
              <strong>{price}</strong>
          </p>
          <div className="basketproduct_rating">
              {Array(rating)
              .fill().map((_)=>
                  <p>⭐</p>
              )
              }
          </div>
        <button onClick={RemovefromBasket}>Remove</button>

        </div>
            
        </div>
    )
}
