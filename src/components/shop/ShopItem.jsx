import {useCartItems} from "../../context/cart/CartContext.jsx";

const ShopItem = ({url, name}) => {
    const {addToCart} = useCartItems();

    return (
        <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="relative flex w-96 flex-col  text-gray-700 shadow-md">
                <div
                    className="bg-gradient-to-r from-[#f02aa6] to-[#ff6f48] hover:bg-gradient-to-r hover:from-[#fff] hover:to-[#ff6f48]">
                    <img src={url} alt={name} className="h-full w-full object-cover hover:opacity-50 "/>

                </div>
            </div>
        </div>
    );
};

export default ShopItem;
