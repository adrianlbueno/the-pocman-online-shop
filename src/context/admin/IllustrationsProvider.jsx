import {useFetchIllustrations} from "../../hooks/useFetchIllustrations.js";
import {useReducer} from "react";
import illustrationsReducer from "./illustrationsReducer.jsx";
import {IllustrationsContext, IllustrationsDispatchContext} from "./IllustrationsContext.jsx";

export const IllustrationsProvider = ({children}) => {

    const [initialIllustrations] = useFetchIllustrations();
    const [illustrations, dispatch] = useReducer(illustrationsReducer, initialIllustrations, undefined);
    return (
        <IllustrationsContext.Provider value={illustrations}>
            <IllustrationsDispatchContext.Provider value={dispatch}>
                {children}
            </IllustrationsDispatchContext.Provider>
        </IllustrationsContext.Provider>
    );
};