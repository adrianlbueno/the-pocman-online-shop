import {createContext, useState} from "react";
import {useFetchIllustrations} from "../hooks/useFetchIllustrations.js";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

    const illustrations= useFetchIllustrations()

    const getDefaultCart = () => {
        let cart = [];
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
                total = illustrations.reduce((accumulator, current) => accumulator + current.price * current.quantity, initialValue)
            }
        }
        return total;
    };

    const addToCart = (item) => {

        console.log("item:", item)
        setCartItems(prev => [...prev, item] + 1 )
    };

    const removeFromCart = (item) => {
        setCartItems((prev) => ({...prev, [item]: prev[item] - 1}));
    };

    const updateCartItemCount = (newAmount, item) => {
        setCartItems((prev) => ({...prev, [item]: newAmount}));
    };

    const checkout = () => {
        setCartItems(getDefaultCart());
    };

    return (
        <ShopContext.Provider value={{
            cartItems,
            addToCart,
            updateCartItemCount,
            removeFromCart,
            getTotalCartAmount,
            checkout
        }}>
            {props.children}
        </ShopContext.Provider>
    );
};