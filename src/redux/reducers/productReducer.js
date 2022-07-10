import { ActionTypes } from "../constants/action-types"

const initState = {
    products: [],
    isLoaded: false
}

export const productReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload, isLoaded: true};
        case ActionTypes.SET_LOADED:
            return {...state, isLoaded:payload}
        default:
            return state;
    }
}

export const pageProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, product:payload};
        default:
            return state;
    }
}

