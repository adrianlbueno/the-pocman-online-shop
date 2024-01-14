import { createContext, useReducer } from 'react';
import { useFetchIllustrations } from '../hooks/useFetchIllustrations';
import appReducer from './appReducer';


export const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
    const illustrations = useFetchIllustrations();

    console.log("illustration", illustrations)
    const [state, dispatch] = useReducer(appReducer, { illustrations });

    function addIllustration(illustration) {
        dispatch({
            type: "ADD_ILLUSTRATION",
            payload: illustration
        });
    }

    function editIllustration(illustration) {
        dispatch({
            type: "EDIT_ILLUSTRATION",
            payload: illustration
        });
    }

    function removeIllustration(id) {
        dispatch({
            type: "REMOVE_ILLUSTRATION",
            payload: id
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                illustrations: state.illustrations,
                addIllustration,
                editIllustration,
                removeIllustration
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};