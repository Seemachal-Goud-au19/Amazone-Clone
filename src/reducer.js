import { StateContext } from "./StateProvider";
import { useContext } from "react";

export const initialState = {
  basket: [//{ id:"986",
  // title:"Watch",
  // price:896,
  // rating:5,
  // image:"https://m.media-amazon.com/images/I/61xzuXWWozS._AC_UL320_.jpg"}]
]
};

export const getBasketTotal=(basket)=> basket?.reduce((amount,item)=>item.price+amount,0)


export function reducer(state, action) {
    console.log(action)
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
         
          basket:[...state.basket,action.item]
        };
      break;
    case "REMOVE_FROM_BASKET":
      
     return{ basket:state.basket.filter((ele)=>ele.id!=action.id )};
      break;
    default:
      return {state};
      
  }
}


