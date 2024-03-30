import { ADD_TO_CART, REMOVE_FROM_CART, USER_LIST } from "./constant";

export function addToCart(product){
        return{
            type:ADD_TO_CART,
            data:product
        }
}

export function removeFromCart(product){
    return{
        type:REMOVE_FROM_CART,
        data:product
    }   
}

export function getUserList() {
    return {
      type: USER_LIST,
    };
  }