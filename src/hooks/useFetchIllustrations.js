import { useEffect, useState } from "react";

export const useFetchIllustrations = () => {
    const URL_API = "https://the-pocman-backend.onrender.com/illustrations";
    const [illustrations, setIllustrations] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(URL_API);
            if (response.ok) {
                const json = await response.json();
                setIllustrations(json);
            }
        } catch (error) {
            console.error("Error fetching illustrations:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return illustrations;
};