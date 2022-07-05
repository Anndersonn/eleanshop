import { ActionTypes } from "../constants/action-types"

const initState = {
    currentPage: 1,
    pageSize: 20,
    totalCount: 100 
}

const paginationReducer = (state = initState, {type, currentPage, totalCount}) => {
    switch (type) {
        case ActionTypes.SET_CURRENT_PAGE:
            return {...state, currentPage:currentPage};
            case ActionTypes.SET_TOTAL_PRODUCT_COUNT:
                return {...state, totalCount:totalCount};
        default:
            return state;
    }
}

export default paginationReducer;