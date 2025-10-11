import { useFetchIllustrations } from '../../hooks/useFetchIllustrations.js';
import IllustrationData from './IllustrationData.jsx';
import WelcomePage from '../common/WelcomePage.jsx';

const Shop = () => {
  const [illustrations, isLoading] = useFetchIllustrations();

  if (isLoading) {
    return <WelcomePage />;
  }

  return (
    <>
      <div className="container mx-auto px-5 overflow-hidden">
        <div className="flex justify-center text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <IllustrationData data={illustrations} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
