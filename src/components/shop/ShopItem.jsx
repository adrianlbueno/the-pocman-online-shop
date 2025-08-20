import { useCartItems } from "../../context/cart/CartContext.jsx";

const ShopItem = ({ url, name }) => {
  const { addToCart } = useCartItems();
  return (
    <div className="group relative lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex w-96 flex-col text-gray-700 shadow-md">
        <div className="group relative">
          <img src={url} alt={name} className="w-full h-full object-cover" />
          <div
            className="
                absolute inset-0
                bg-black/60
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-300
                backdrop-filter
                backdrop-saturate-100  
                group-hover:backdrop-saturate-200  
              "
          >
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="text-sm text-cyan-400">{name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
