import { useParams, useNavigate } from 'react-router-dom';
import { useFetchIllustrations } from '../hooks/useFetchIllustrations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const ItemDetailsPage = () => {
  const [illustrations, isLoading] = useFetchIllustrations();
  const { _illustrationId } = useParams();
  const navigate = useNavigate();

  if (illustrations.length === 0) return;

  const currentIndex = illustrations.findIndex(
    (item) => item._id === _illustrationId
  );

  const illustration = illustrations[currentIndex];

  const nextIndex = (currentIndex + 1) % illustrations.length;
  const prevIndex =
    (currentIndex - 1 + illustrations.length) % illustrations.length;

  return (
    <div className="container mx-auto px-5 pt-6">
      <div className="flex flex-wrap lg:w-2/3 mx-auto">
        <img
          alt={illustration.title}
          className="max-h-[60vh]
              w-auto
              lg:max-w-[60vh]
              object-contain
              rounded"
          src={illustration.image}
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-lg title-font text-gray-500 tracking-widest font-nunito font-bold">
            {illustration.title}
          </h2>
          <p className="leading-relaxed font-nunito">
            {illustration.description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 lg:w-4/5 mx-auto font-nunito">
        <button
          className=" px-4 py-2 text-black"
          onClick={() =>
            navigate(`/illustrations/${illustrations[prevIndex]._id}`)
          }
        >
          {/*<FontAwesomeIcon icon={faAngleLeft} />*/}
          Prev
        </button>
        <span>/</span>
        <button
          className="px-4 py-2  text-black"
          onClick={() =>
            navigate(`/illustrations/${illustrations[nextIndex]._id}`)
          }
        >
          {/*<FontAwesomeIcon icon={faAngleRight} />*/}
          Next
        </button>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
