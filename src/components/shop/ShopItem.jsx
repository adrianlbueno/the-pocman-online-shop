import { useCartItems } from "../../context/cart/CartContext.jsx";

const ShopItem = ({ url, name }) => {
  const { addToCart } = useCartItems();
  console.log("ShopItem rendered", url, name);
  return (
    <div className="relative group lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex w-96 flex-col  text-gray-700 shadow-md">
        <div className=" relative group">
          <img src={url} alt={name} className="h-full w-full object-cover  " />
          <div className="opacity-0 group-hover:opacity-50 duration-300 absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]  text-xl text-black font-nunito">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
