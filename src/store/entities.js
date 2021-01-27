import { combineReducers } from 'redux';
import tasksReducer from './tasks/reducer';
import categoriesReducer from './categories/reducer';

export default combineReducers({
  tasks: tasksReducer,
  categories: categoriesReducer
});