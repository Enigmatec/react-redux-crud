import { FETCH_REQUEST, FETCH_REQUEST_FAIL } from "./general-action-types";

export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

export const fetchRequestFail = (errors) => {
    return {
        type: FETCH_REQUEST_FAIL,
        payload: errors
    }
}