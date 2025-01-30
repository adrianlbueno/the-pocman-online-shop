import {useFetchIllustrations} from "../../hooks/useFetchIllustrations.js";
import {useReducer} from "react";
import {useIllustrations, useIllustrationsDispatch} from "./IllustrationsContext.jsx";
import illustrationsReducer from "./illustrationsReducer.jsx";

export const IllustrationsProvider = ({ children }) => {

    const initialIllustrations = useFetchIllustrations();
    const [illustrations, dispatch] = useReducer(illustrationsReducer, initialIllustrations);

    return (
        <useIllustrations.Provider value={illustrations}>
            <useIllustrationsDispatch.Provider value={dispatch}>
                {children}
            </useIllustrationsDispatch.Provider>
        </useIllustrations.Provider>
    );
};