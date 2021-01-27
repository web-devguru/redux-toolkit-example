import { createReducer } from "@reduxjs/toolkit";
import { setStatusFilter } from "./actions";

export const statusFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export default createReducer(statusFilters.SHOW_ALL, {
  [setStatusFilter.type]: (filters, action) => {
    return action.payload;
  }
})