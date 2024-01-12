import { createContext, useReducer } from 'react';

import appReducer from './appReducer';

const initialState = {
    illustrations: [
        {
            "id": 1,
            "title": "The Pocman Artwork ",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "price": 100,
            "image": "https://i.imgur.com/GvEoeXp.jpg"
        },
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

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