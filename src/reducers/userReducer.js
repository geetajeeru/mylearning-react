const initialState = {
    users: [],
    todos: []
};

export default function(state=initialState, action) {
    switch(action.type) {
        case "GET_USERS":
            return {
                ...state,
                users: action.payload
            };
        case "GET_TODOS":
            return {
                ...state,
                todos: action.payload
            };
        default:
            return state;
    }
};