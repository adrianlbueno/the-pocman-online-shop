import React from 'react';
import { useFetchIllustrations } from '../../hooks/useFetchIllustrations';
import WelcomePage from './WelcomePage.jsx';

const ComingSoon = ({ isLoading }) => {
  return (
    <div className="font-nunito flex flex-col justify-center items-center min-h-screen p-5 text-center text-[32px] bg-[#F406E6] text-white">
      {isLoading && <WelcomePage />}
    </div>
  );
};

export default ComingSoon;
