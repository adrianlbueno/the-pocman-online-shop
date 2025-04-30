import {useCartItems} from "../../context/cart/CartContext.jsx";

const ShopItem = ({title, description, price, url}) => {
    const {addToCart} = useCartItems();

    return (
        <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="relative flex w-96 flex-col  text-gray-700 shadow-md">
                <div>
                    <img src={url} className="h-full w-full object-cover"/>
                </div>
            </div>
        </div>
    );
};

export default ShopItem;
