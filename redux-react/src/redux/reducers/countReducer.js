import {   ADD,SUB } from "../constants/actions-type"
export const countInitialState = {
  
    counter : 0
}

 const countReducer = (state = countInitialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                counter: state.counter + 1
            }
        case SUB:
            return {
                counter: state.counter - 1
            }
        default:
            return state
    }
}

export default countReducer;