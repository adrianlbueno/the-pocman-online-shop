import { createContext, memo, useContext } from "react";

export const MultiContext = createContext(null);
MultiContext.displayName = "MultiContext";

export const MultiContextProvider = memo(
    function({ map, children }) {
        const contextMap = {};
        for (const i in map) {
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