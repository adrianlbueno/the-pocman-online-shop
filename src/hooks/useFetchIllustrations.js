import { useEffect, useState } from "react";

export const useFetchIllustrations = () => {
    const URL_API = "https://thepocman.adaptable.app/Illustrations";
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