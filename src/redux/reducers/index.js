import { combineReducers } from 'redux';
import paginationReducer from './paginationReducer';
import { productReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    page: paginationReducer,
})

export default reducers;