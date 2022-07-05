import { ActionTypes } from "../constants/action-types"

const initState = {
    products: []
}

export const productReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
        default:
            return state;
    }
}