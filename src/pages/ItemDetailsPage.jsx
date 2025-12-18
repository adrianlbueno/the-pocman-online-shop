import { useParams, useNavigate } from 'react-router-dom';
import { useFetchIllustrations } from '../hooks/useFetchIllustrations';

const ItemDetailsPage = () => {
  const [illustrations] = useFetchIllustrations();
  const { _illustrationId } = useParams();
  const navigate = useNavigate();

  if (illustrations.length === 0) return;

  const currentIndex = illustrations.findIndex(
    (illustration) => illustration._id === _illustrationId
  );

  const illustration = illustrations[currentIndex];
  const nextIndex = currentIndex + 1;
  const prevIndex = currentIndex - 1;

  return (
    <div className="container mx-auto px-5 pt-6">
      <div className="lg:w-2/3 mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="h-[60vh] flex items-center justify-center">
              <img
                alt={illustration.title}
                className="max-h-full w-auto object-contain rounded"
                src={illustration.image}
              />
            </div>
          </div>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-lg title-font text-gray-500 tracking-widest font-nunito font-bold">
              {illustration.title}
            </h2>
            <p className="leading-relaxed font-nunito">
              {illustration.description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-4 lg:w-4/5 mx-auto font-nunito">
        <button
          className={`px-4 py-2 ${
            currentIndex > 0 ? 'text-black' : 'text-gray-500'
          }`}
          onClick={() =>
            navigate(`/illustrations/${illustrations[prevIndex]._id}`)
          }
          disabled={currentIndex < 0}
        >
          Prev
        </button>

        <span>/</span>

        <button
          className="px-4 py-2 text-black"
          onClick={() =>
            navigate(`/illustrations/${illustrations[nextIndex]._id}`)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
