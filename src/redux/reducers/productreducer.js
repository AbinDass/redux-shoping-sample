/* eslint-disable no-unused-expressions */
/* eslint-disable default-case */
import { ActionTypes } from "../constants/action-types";

const initialstate = {
    product: [],
};
export const ProductReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, product: payload};
 
        default:
            return state;
    }
};

export const selectedproductReducer = (state={},{type,payload}) =>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCTS:return{...state, ...payload}
        default: return state;

    }
}