import React from "react";
import {useFetchIllustrations} from "../../hooks/useFetchIllustrations";

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
        <div
            className="flex flex-col justify-center items-center min-h-screen p-5 text-center text-[32px] font-sans bg-[#F406E6]">
            <h2 className="text-white">Please check back soon.</h2>

            {isLoading && <p>Loading...</p>}

            {dailyIllustration && (
                <div className="aspect-w-16 aspect-h-9">
                    <img
                        className="w-full"
                        src={dailyIllustration.image}
                        alt="Daily Pocman Drop"
                    />
                </div>
            )}
        </div>
    );
}
