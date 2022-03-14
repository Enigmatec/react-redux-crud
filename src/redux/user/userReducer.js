import { FETCH_ALL_USERS } from "./action-types";
import { FETCH_REQUEST, FETCH_REQUEST_FAIL } from "../general-action-types";

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_ALL_USERS:
            return {
                ...state,
                loading: false,
                users:action.payload,
                error: ''
            }

        case FETCH_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                users:[],
                error: action.payload
            }
    
        default:
            return state
    }
}

export default userReducer;