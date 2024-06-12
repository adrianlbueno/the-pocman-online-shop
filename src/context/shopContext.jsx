import { createContext, useContext, useState } from "react";
import { IllustrationsContext } from "./apiContext";
import illustrationList from "../components/admin/IllustrationList.jsx";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

    const illustrations = useContext(IllustrationsContext);

    const getDefaultCart = () => {
        let cart = {};
        for (let i = 1; i < illustrations.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    };

    const [cartItems, setCartItems] = useState(getDefaultCart());

    console.log({cartItems})
    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const initialValue = 0;
                 total = illustrationList.reduce((accumulator,current) => accumulator + current.price * current.quantity, initialValue)
            }
        }
        return total;
    };

    const addToCart = (item) => {
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