import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
const ShopItem = ({ id, title, description, price, url }) => {
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id];

    console.log(cartItems)
    const handleAddToCart = (event) => {
        event.preventDefault();
        addToCart(id);
    };

    return (
        < div className="lg:w-1/3 sm:w-1/2 p-4" >
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={url}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {title}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            €{price}
                        </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button
                        className="block w-full select-none rounded-lg bg-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={handleAddToCart}
                    >
                        Add to Cart {cartItemCount > 0 && <> ({cartItemCount}) </>}
                    </button>
                </div>
            </div>
        </div >
    );
}

export default ShopItem;