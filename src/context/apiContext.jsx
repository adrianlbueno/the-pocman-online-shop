import { createContext } from "react";
import { useFetchIllustrations } from "../hooks/useFetchIllustrations";

export const IllustrationsContext = createContext({});

export const APIContextProvider = ({ children }) => {
    const illustrations = useFetchIllustrations();
    console.log("illustrations", illustrations);

    return (
        <IllustrationsContext.Provider value={{ illustrations }}>
            {children}
        </IllustrationsContext.Provider>

    );
}