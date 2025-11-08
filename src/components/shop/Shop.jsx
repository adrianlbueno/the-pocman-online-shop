import { useFetchIllustrations } from '../../hooks/useFetchIllustrations.js';
import IllustrationData from './IllustrationData.jsx';
import { scrollToTop } from '../../helper/scrollToTop.js';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Shop = () => {
  const [illustrations, isLoading] = useFetchIllustrations();

  return (
    <>
      <div className="container mx-auto px-5">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4">
            <IllustrationData data={illustrations} />
          </div>
          <div className="flex justify-end items-end overflow mt-4">
            <button
              id="scrollToTopBtn"
              className="bg-[#FD87D1] rounded-xl hover:text-white hover:bg-[#7BF2BC]  p-6 text-lg"
              onClick={() => scrollToTop()}
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
