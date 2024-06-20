import { createContext, memo, useContext } from "react";
export const MultiContext = createContext(null);
MultiContext.displayName = "MultiContext";

export const MultiContextProvider = memo(
    function(){

    }
);

MultiContextProvider.displayName = "MultiContextProvider";