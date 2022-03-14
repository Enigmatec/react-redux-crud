import axios from "axios";
import { fetchRequest, fetchRequestFail } from "../../redux/general-actions";
import { fetchUsers } from "../../redux/user/actions";

export const Userlist = () => {
    return (dispatch) => {
        dispatch(fetchRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            const users = response.data;
            dispatch(fetchUsers(users))
        })
        .catch(error => {
            dispatch(fetchRequestFail(error.message))
        })
    }
}