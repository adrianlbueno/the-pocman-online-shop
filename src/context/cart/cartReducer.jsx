import {useState} from "react";

export const cartReducer = () => {

    const getDefaultCart = () => {
        let cart = [];
        for (let i = 1; i < items.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    };

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const initialValue = 0;
                total = items.reduce((accumulator, current) => accumulator + current.price * current.quantity, initialValue)
            }
        }
        return total;
    };

    const addToCart = (item) => {
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
}