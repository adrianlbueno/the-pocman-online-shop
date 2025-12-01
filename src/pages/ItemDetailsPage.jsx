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
    <div className="container mx-auto px-5 py-24">
      <div className="flex flex-wrap lg:w-4/5 mx-auto">
        <img
          alt={illustration.title}
          className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          src={illustration.image}
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
            {illustration.title}
          </h2>
          <p className="leading-relaxed">{illustration.description}</p>
        </div>
      </div>
      <div className="flex justify-between mt-8 lg:w-4/5 mx-auto">
        <button
          className="px-4 py-2 bg-[#C025D3] text-white hover:bg-teal-500"
          onClick={() =>
            navigate(`/illustrations/${illustrations[prevIndex]._id}`)
          }
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        <button
          className="px-4 py-2 bg-[#C025D3] text-white hover:bg-teal-500"
          onClick={() =>
            navigate(`/illustrations/${illustrations[nextIndex]._id}`)
          }
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
