import { createContext, useContext, useState } from "react";
import { IllustrationsContext } from "./apiContext";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

    const {illustrations} = useContext(IllustrationsContext);

    const getDefaultCart = () => {
        let cart = {};
        for (let i = 1; i < illustrations.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    };

    const [cartItems, setCartItems] = useState(getDefaultCart);

    console.log({cartItems})
    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const initialValue = 0;
                 total = illustrations.reduce((accumulator,current) => accumulator + current.price * current.quantity, initialValue)
            }
        }
        return total;
    };

    const addToCart = (item) => {

        console.log("item:", item )

        setCartItems(prev =>({
            ...prev,
            [item] : (prev[item] || 0) +1
        }))
    };

    const removeFromCart = (item) => {
        setCartItems((prev) => ({ ...prev, [item]: prev[item] - 1 }));
    };

    const updateCartItemCount = (newAmount, item) => {
        setCartItems((prev) => ({ ...prev, [item]: newAmount }));
    };

    const checkout = () => {
        setCartItems(getDefaultCart());
    };

    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};