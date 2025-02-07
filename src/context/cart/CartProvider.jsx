import {CartContext, CartDispatchContext} from "./CartContext.jsx";
import {cartReducer} from "./cartReducer.jsx";
import {useReducer} from "react";
export const CartProvider = ({children}) => {
    const initialCart = [];
    const [items, dispatch] = useReducer(cartReducer, initialCart);
    return (
        <CartContext.Provider value={items}>
            <CartDispatchContext.Provider value={dispatch()}>
            {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    );
};