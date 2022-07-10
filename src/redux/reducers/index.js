import { combineReducers } from 'redux';
import paginationReducer from './paginationReducer';
import { pageProductReducer, productReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    currentProduct: pageProductReducer,
    page: paginationReducer,
})

export default reducers;