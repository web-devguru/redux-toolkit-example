import { combineReducers } from "redux";
import statusFilterReducer from './statusFilter/reducer';
import categoryFilterReducer from './categoryFilter/reducer';

export default combineReducers({
  byStatus: statusFilterReducer,
  byCategory: categoryFilterReducer
})