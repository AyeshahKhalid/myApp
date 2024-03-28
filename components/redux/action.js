import { ADD_TO_CART } from "./constant";

export function addToCart(product){
        return{
            type:ADD_TO_CART,
            data:product
        }
}