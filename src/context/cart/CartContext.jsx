import {createContext, useContext} from "react";


export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null)

export function useCartItems() {
    return useContext(CartContext);
}

export function useItemsDispatch() {
    return useContext(CartDispatchContext);
}