import { useFetchIllustrations } from '../../hooks/useFetchIllustrations.js';
import IllustrationData from './IllustrationData.jsx';
import Loading from '../common/Loading.jsx';

const Shop = () => {
  const [illustrations, isLoading] = useFetchIllustrations();

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {isLoading && <Loading />}
            <IllustrationData data={illustrations} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
