import { createContext, memo, useContext } from "react";
import isEqual from "react-fast-compare";

export const MultiContext = createContext(null);
MultiContext.displayName = "MultiContext";

export const MultiContextProvider = memo(

    function({ map, children }) {
        const contextMap = {};
        console.log(map)
        for (const i in map) {
             console.log({i})
            contextMap[i] = useContext(map[i]);
        }


        return (
            <MultiContext.Provider value={contextMap}>
                {children}
            </MultiContext.Provider>
        );
    },
    (prevProps, nextProps) => isEqual(prevProps.children, nextProps.children)
);

MultiContextProvider.displayName = "MultiContextProvider";