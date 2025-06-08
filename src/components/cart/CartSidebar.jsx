import {faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ItemsInCartList from "././ItemsInCartList.jsx";

const CartSidebar = ({open, toggleCart}) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50" aria-labelledby="slide-over-title" aria-modal="true">
            <div
                className="absolute inset-0"
                onClick={toggleCart}
            ></div>

            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between text-lg font-medium text-gray-900">
                            <h2 id="slide-over-title">Shopping Cart</h2>
                            <button onClick={toggleCart}
                                    className="relative ml-3 flex items-center justify-center h-6 w-6">
                                <FontAwesomeIcon icon={faX} className="w-5 h-5 cursor-pointer"/>
                            </button>
                        </div>
                        <div className="mt-8">
                            <ItemsInCartList/>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>0</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                            <a href="#"
                               className="flex items-center justify-center rounded-md border border-transparent hover:bg-blue-500 bg-[#C025D3] px-6 py-3 text-base font-medium text-white shadow-sm ">Checkout</a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                <button type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSidebar;