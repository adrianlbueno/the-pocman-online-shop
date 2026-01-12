import { useNavigate } from 'react-router-dom';

const PreviousAndNextButton = ({
  prevIndex,
  nextIndex,
  illustrations,
  currentIndex,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center mt-4 lg:w-4/5 mx-auto font-nunito">
      <button
        className={`px-4 py-2 ${
          currentIndex <= 0 ? 'text-gray-500' : 'text-black'
        }`}
        onClick={() =>
          navigate(`/illustrations/${illustrations[prevIndex]._id}`)
        }
        disabled={currentIndex <= 0}
      >
        Prev
      </button>
      <span>/</span>
      <button
        className={`px-4 py-2 ${
          currentIndex >= illustrations.length - 1
            ? 'text-gray-500'
            : 'text-black'
        }`}
        onClick={() =>
          navigate(`/illustrations/${illustrations[nextIndex]._id}`)
        }
        disabled={currentIndex >= illustrations.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default PreviousAndNextButton;
