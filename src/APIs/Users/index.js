import axios from "axios";
import { fetchRequest, fetchRequestFail } from "../../redux/general-actions";
import { fetchAllUsers, fetchUser } from "../../redux/user/actions";

export const Userlist = () => {
    return async (dispatch) => {
        dispatch(fetchRequest())
        await axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            const users = response.data;
            dispatch(fetchAllUsers(users))
        })
        .catch(error => {
            dispatch(fetchRequestFail(error.message))
        })
    }
}

export const UserData = (id) => {
    return async (dispatch) => {
        dispatch(fetchRequest())
        await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            const user = response.data;
            dispatch(fetchUser(user))
        })
        .catch(error => {
            dispatch(fetchRequestFail(error.message))
        })
    }
}