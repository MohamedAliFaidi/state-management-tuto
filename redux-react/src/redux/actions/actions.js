import { ADD_ARTICLE } from "../constants/actions-type";

export const addPost = newPost => {
    return {
        type: ADD_ARTICLE,
        payload: newPost
    }
}
