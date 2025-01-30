const illustrationsReducer = (state, action) => {
    let updatedIllustration, updatedIllustrations;

    switch (action.type) {
        case "SET_ILLUSTRATIONS":
            return { ...state, illustrations: action.payload };

        case "ADD_ILLUSTRATION":
            return {
                ...state,
                illustrations: [...state.illustrations, action.payload],
            };

        case "EDIT_ILLUSTRATION":
            updatedIllustration = action.payload;

            updatedIllustrations = state.illustrations.map((illustration) =>
                illustration.id === updatedIllustration.id ? updatedIllustration : illustration
            );

            return {
                ...state,
                illustrations: updatedIllustrations,
            };

        case "REMOVE_ILLUSTRATION":
            return {
                ...state,
                illustrations: state.illustrations.filter(
                    (illustration) => illustration.id !== action.payload
                ),
            };

        default:
            return state;
    }
};

export default illustrationsReducer;
