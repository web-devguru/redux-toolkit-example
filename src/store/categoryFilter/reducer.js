import { createReducer } from "@reduxjs/toolkit";
import { setCategoryFilter } from "./actions";

export const categoryFilters = {
  SHOW_ALL: 0
}

export default createReducer(categoryFilters.SHOW_ALL, {
  [setCategoryFilter.type]: (filters, action) => {
    return action.payload;
  }
})