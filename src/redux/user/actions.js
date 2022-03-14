import { FETCH_ALL_USERS } from "./action-types";

export const fetchUsers = users => {
    return {
        type: FETCH_ALL_USERS,
        payload: users
    }
}