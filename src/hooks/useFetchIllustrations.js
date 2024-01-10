import { useEffect, useState } from "react";

export const useFetchIllustrations = () => {
    const URL_API = "http://localhost:3000/illustrations"
    const [illustrations, setIllustrations] = useState([]);

    useEffect(() => {
        fetch(URL_API)
            .then(response => response.json())
            .then(json => setIllustrations(json));
    }, []);

    return illustrations;
}
