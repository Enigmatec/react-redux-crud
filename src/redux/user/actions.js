import { FETCH_ALL_USERS, FETCH_USER } from "./action-types";

export const fetchAllUsers = users => {
    return {
        type: FETCH_ALL_USERS,
        payload: users
    }
}

export const fetchUser = user => {
    return {
        type: FETCH_USER,
        payload: user
    }
}