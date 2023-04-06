import {combineReducers} from  "redux"
import { ProductReducer , selectedproductReducer} from "./productreducer"

const reducers = combineReducers({
    allproducts: ProductReducer,
    product: selectedproductReducer,
})
export default reducers;