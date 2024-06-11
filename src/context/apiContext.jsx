import { createContext } from "react";
import { useFetchIllustrations } from "../hooks/useFetchIllustrations";

export const IllustrationsContext = createContext({});

export const APIContextProvider = ({ children }) => {
    const illustrations = useFetchIllustrations();

    return (
        <IllustrationsContext.Provider value={{ illustrations }}>
            {children}
        </IllustrationsContext.Provider>

    );
}