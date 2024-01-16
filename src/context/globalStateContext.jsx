import { createContext, useEffect, useReducer } from 'react';
import { useFetchIllustrations } from '../hooks/useFetchIllustrations';
import appReducer from './appReducer';

const initialState = {
    illustrations: []
}

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {

    const illustrations = useFetchIllustrations();
    const [state, dispatch] = useReducer(appReducer, initialState);

    useEffect(() => {
        if (illustrations) {
            dispatch({
                type: "SET_ILLUSTRATIONS",
                payload: illustrations
            });
        }
    }, [illustrations]);

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