import ProductReducer from './productReducer';
import countReducer from './countReducer';

import {
    productInitialState
} from "./productReducer"
import {
    countInitialState
} from "./countReducer"

const initialState = {
    count: countInitialState,
    products: productInitialState
}
 


const rootReducer = (state = initialState, action)=>{
    return {
        count: countReducer(state.count, action),
        products: ProductReducer(state.products, action)
    }
    
}



export default rootReducer;