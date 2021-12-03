import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

export const Product = ({id,title,price,rating,image}) => {
    const [{basket},dispatch]=useStateValue();
    console.log(basket)
   const AddToCart=()=>{
       dispatch({
          type:"ADD_TO_BASKET",
          item:{
            id:id,
            title:title,
            price:price,
            rating:rating,
            image:image
          } 
       })
      
   }

    return (
        <div className="product">

        <div iv className="product_Info">
        <p>{title}</p>  
          <p className="product_price">
              <small>$</small>
              <strong>{price}</strong>
          </p>
          <div className="product_rating">
              {Array(rating)
              .fill().map((_)=>
                  <p>⭐</p>
              )
              }
          </div>
        </div>
         
          <img src={image} alt="gadget"/>
          <button onClick={AddToCart}>Add to basket</button>
        </div>
    )
}
