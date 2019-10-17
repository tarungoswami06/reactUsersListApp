import * as ActionTypes from './UserActionTypes';

const initialState = {
    data: [],
    loading: false,
    loaded: false,
    error: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ActionTypes.LOAD_USERS:
        return { ...state, data: payload }

    case ActionTypes.LOAD_USERS_SUCCESS:
        return { ...state, loaded: true }
    
    case ActionTypes.LOAD_USERS_FAILURE:
        return { ...state, error: payload }
    
    case ActionTypes.SET_LOADING:
        return { ...state, loading: payload }
    
    case ActionTypes.SET_ERROR:
            return { ...state, error: payload }
    default:
        return state
    }
}
