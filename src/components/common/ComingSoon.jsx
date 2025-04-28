import React from "react";
import {useFetchIllustrations} from "../../hooks/useFetchIllustrations";

export default function ComingSoon() {
    const [illustrations, isLoading] = useFetchIllustrations();

    // Pick one illustration based on today's date
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
        <div className="flex flex-col justify-center items-center min-h-screen p-5 text-center text-[32px] font-sans">
            <h2>The Pocman will be back soon.</h2>

            {isLoading && <p>Loading today's Pocman drop...</p>}

            {dailyIllustration && (
                <img
                    src={dailyIllustration.image} // 👈 or whatever the field is (maybe dailyIllustration.image?)
                    alt="Daily Pocman Drop"
                    style={{marginTop: "30px", maxWidth: "80%", borderRadius: "12px"}}
                />
            )}
        </div>
    );
}
