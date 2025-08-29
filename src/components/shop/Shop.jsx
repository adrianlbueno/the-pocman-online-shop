import { useFetchIllustrations } from '../../hooks/useFetchIllustrations.js';
import IllustrationData from './IllustrationData.jsx';

const Shop = () => {
  const [illustrations, isLoading] = useFetchIllustrations();

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col text-center w-full mb-20"></div>
        <div className="flex flex-wrap -m-4 justify-center">
          <IllustrationData data={illustrations} />
        </div>
      </div>
    </>
  );
};

export default Shop;
