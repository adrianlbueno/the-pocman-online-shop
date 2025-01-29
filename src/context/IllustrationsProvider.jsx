import {useFetchIllustrations} from "../hooks/useFetchIllustrations.js";
import {useReducer} from "react";
import {useIllustrations, useIllustrationsDispatch} from "./IllustrationsContext.jsx";
import illustrationsReducer from "./illustrationsReducer.jsx";

export const IllustrationsProvider = ({ children }) => {

    const illustrationsIllustration = useFetchIllustrations();
    const [illustrations, dispatch] = useReducer(illustrationsReducer, illustrationsIllustration);

    return (
        <useIllustrations.Provider value={illustrations}>
            <useIllustrationsDispatch.Provider value={dispatch}>
                {children}
            </useIllustrationsDispatch.Provider>
        </useIllustrations.Provider>
    );
};