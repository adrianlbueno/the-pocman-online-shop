import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="w-full px-16 md:px-0 h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8">
          <p className=" font-nunito font-light text-6xl md:text-7xl lg:text-7xl  tracking-wider text-[#C025D3]">
            404
          </p>
          <p className="text-2xl md:text-3xl lg:text-5xl font-nunito font-extrabold tracking-wider mt-4">
            Oops, Page Not Found
          </p>

          <Link to="/">
            <button
              type="button"
              className=" font-nunito flex items-center space-x-2 bg-[#C025D3] hover: font-extrabold text-white px-4 py-2 mt-6 rounded transition duration-150"
            >
              Return Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
