import React from "react";
import { useFetchIllustrations } from "../../hooks/useFetchIllustrations";

export default function ComingSoon() {
  const [illustrations, isLoading] = useFetchIllustrations();

  const getDailyIllustration = () => {
    if (illustrations.length === 0) return null;

    const today = new Date();
    const dayOfYear = Math.floor(
      (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
    );

    const index = dayOfYear % illustrations.length;
    return illustrations[index];
  };

  const dailyIllustration = getDailyIllustration();

  return (
    <div className="font-nunito flex flex-col justify-center items-center min-h-screen p-5 text-center text-[32px] bg-[#F406E6] text-white">
      {isLoading && <p>Loading...</p>}

      {dailyIllustration && (
        <div className="aspect-w-16 aspect-h-9">
          <h2 className=" font-nunito p-4">Please check back soon.</h2>
          <img
            className=" w-96 object-cover"
            src={dailyIllustration.image}
            alt="Daily Pocman Drop"
          />
          <a
            className=" font-nunito p-4 underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/thepocman"
          >
            for More Cool Illustrations
          </a>
        </div>
      )}
    </div>
  );
}
