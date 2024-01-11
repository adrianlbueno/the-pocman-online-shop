import { createContext, useContext, useState } from "react";
import { IllustrationsContext } from "./apiContext";

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

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = illustrations.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (typeof prev[itemId] === 'number' ? prev[itemId] : 0) + 1,
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
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
        checkout,
    };

    console.log("cartItems:", cartItems)
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};