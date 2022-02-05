import axios from "axios";

// beacuse set up of the axios instance, so you need call the request with the axios instance
const axionsInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})


export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axionsInstance.post('auth/login', userCredential);
        dispatch({
            type: "LOGIN_SUCCESS", payload: res.data
        });
    } catch (err) {
        dispatch({
            type: "LOGIN_FAILURE", payload: err
        });

    }
}