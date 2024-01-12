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

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    function addIllustration(illustration) {
        dispatch({
            type: "ADD_ILLUSTRATION",
            payload: illustration
        });
    }

    function editillustration(illustration) {
        dispatch({
            type: "EDIT_ILLUSTRATION",
            payload: illustration
        });
    }

    function removeillustration(id) {
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
                editillustration,
                removeillustration
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};