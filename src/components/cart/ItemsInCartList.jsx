import CartItem from "./CardItem.jsx";
import {useFetchIllustrations} from "../../hooks/useFetchIllustrations.js";
import {useCartItems} from "../../context/cart/CartContext.jsx";

const ItemsInCartList = () => {
    const items = useFetchIllustrations();
    const {cartItems} = useCartItems()

    return(
        <ul>
            {!items ? items.map((item) => {
                if (cartItems[item.id] !== 0) {
                    return (
                        <CartItem key={item.id} data={item}/>
                    );
                }
            }) : <p>No items in cart</p>}
        </ul>
    );

}

export default ItemsInCartList;