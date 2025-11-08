import { useParams } from 'react-router-dom';
import { useFetchIllustrations } from '../hooks/useFetchIllustrations';
import { useCartItems } from '../context/cart/CartContext.jsx';

const ItemDetailsPage = () => {
  const [illustrations] = useFetchIllustrations();
  const { illustrationId } = useParams();
  const illustration = illustrations.find(
    (illustration) => illustration.id === illustrationId
  );
  const { addToCart } = useCartItems();

  if (!illustration) return;

  return (
    <>
      <div className="container mx-auto px-5 py-24">
        <div className="flex flex-wrap lg:w-4/5 mx-auto">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={illustration.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {illustration.title}
            </h2>
            {/**
             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
             Random Text
             </h1>
             */}
            <p className="leading-relaxed">{illustration.description}</p>
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
              {/**
               <span className="font-bold text-xl">€{illustration.price}</span>
               <button
               type="button"
               className="px-6 py-2 transition ease-in duration-200 uppercase  hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
               onClick={() => addToCart(illustration)}
               >
               Add to cart
               </button>
               */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetailsPage;
