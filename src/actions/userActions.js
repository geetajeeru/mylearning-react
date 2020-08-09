import axios from "axios";

export const loadUsers = () => async dispatch => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log("users in action", response.data);
        dispatch({
            type: "GET_USERS",
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: "GET_USERS",
            payload: []
        });
    }
};

export const getTodos = (userId) => async dispatch => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
        dispatch({
            type: "GET_TODOS",
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: "GET_TODOS",
            payload: []
        });
    }
};