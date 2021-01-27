import { combineReducers } from 'redux';
import entitiesReducer from "./entities";
import filtersReducer from "./filtersReducer";

export default combineReducers({
  entities: entitiesReducer,
  filters: filtersReducer
})