import axios from 'axios';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
} from './types';

// check token and load user
export const loadUser = () => (dispatch, getState) => {
    // user loading

    dispatch({type:USER_LOADING});
    // request to server
    axios
        .get('/auth')
        .then(res => 
            dispatch({
                type: USER_LOADED,
                payload : res.data
            })
        )
        .catch(err => {
            // handel error
            dispatch({
                type: AUTH_ERROR
            })
        })
}

//Login User

//Logout User

// setup config/headers and token