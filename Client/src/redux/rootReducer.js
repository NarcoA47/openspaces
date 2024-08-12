const initialState = {
    listeditems: [],
}

export const rootReducer = (state = initialState) => {
    switch(action.type) {
        case "UPDATE_CASE":
            return {
                ...state,
                listeditems: action.payload
            };
            default: return state;
    }
}