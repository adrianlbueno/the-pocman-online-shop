import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="font-nunito flex flex-col justify-center items-center min-h-screen p-5 text-center text-[32px] bg-[#F406E6] text-white">
      <div className="aspect-w-16 aspect-h-9">
        <div className="font-nunito uppercase text-[24px]">
          <h2>Under construction</h2>
        </div>
        <img className=" w-96 object-cover" src="" alt="" />
        <div className="font-nunito underline mt-4 sm:whitespace-nowrap uppercase text-[24px]">
          <button
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <Link to="/">Take me back</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
