import * as ActionTypes from './UserActionTypes';
import axios from 'axios';

export const setLoading = (payload) => ({
    type: ActionTypes.SET_LOADING,
    payload
})

export const setError = (payload) => ({
    type: ActionTypes.SET_ERROR,
    payload
})


export const loadUsers = (payload) => ({
    type: ActionTypes.LOAD_USERS,
    payload
})

export const getAllUsers = () => {
    return dispatch => {
        dispatch(setLoading(true));
        axios.get(`http://localhost:8000/users/`)
            .then(res => {
                dispatch(setLoading(false));
                if (res.data) {
                    dispatch(loadUsers(res.data));
                }
            })
            .catch(e => {
                dispatch(setLoading(false));
                dispatch(setError(e));
            })
    }
}