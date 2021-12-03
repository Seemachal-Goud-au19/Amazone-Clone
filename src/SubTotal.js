import React from 'react'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import "./SubTotal.css"
export default function SubTotal() {
    const [{basket,dipatch}]=useStateValue();
    const total=getBasketTotal(basket)
    console.log(total)
    return (
        
            <div className="subtotal">
          <p>SubTotal({basket.length}):${total}</p>
           <button>Proceed to Checkout</button> 
        </div>
      
        
    )
}
