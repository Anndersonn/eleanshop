import { ActionTypes } from "../constants/action-types"

export const setPage = (currentPage) => {
    return {
            type: ActionTypes.SET_CURRENT_PAGE,
            currentPage: currentPage
        }
}


export const setTotalProductCount = (totalCount) => {
    return {
            type: ActionTypes.SET_TOTAL_PRODUCT_COUNT,
            totalCount: totalCount
        }
}