import { createReducer } from '@reduxjs/toolkit';
import { addTask, toggleTask, removeTask } from './actions';

let lastId = 0;

export default createReducer([], {
  [addTask.type]: (tasks, action) => {
    const { category, title } = action.payload;

    tasks.push({
      id: ++lastId,
      title,
      category,
      completed: false
    })
  },
  [toggleTask.type]: (tasks, action) => {
    const index = tasks.findIndex(task => task.id === action.payload.id);
    tasks[index].completed = !tasks[index].completed;
  },
  [removeTask.type]: (tasks, action) => {
    const index = tasks.findIndex(task => task.id === action.payload.id);
    tasks.splice(index, 1);
  }
})