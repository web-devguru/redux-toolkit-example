import { createReducer } from "@reduxjs/toolkit";
import { addCategory } from './actions';

let lastId = 3;

const defaultCategories = [
  { id: 1, title: 'Дом' },
  { id: 2, title: 'Работа' },
  { id: 3, title: 'Список Покупок' }
]

export default createReducer(defaultCategories, {
  [addCategory.type]: (categories, action) => {
    categories.push({
      id: ++lastId,
      title: action.payload.title
    })
  }
});