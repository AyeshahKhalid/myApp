import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

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