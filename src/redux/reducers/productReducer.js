import { ActionTypes } from "../constants/action-types"

const initState = {
    person: [
        {
            id: 1,
            name: 'Andrew'
        }
    ]
}

export const productReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}