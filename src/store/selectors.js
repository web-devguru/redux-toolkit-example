import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./statusFilter/reducer";
import { categoryFilters } from './categoryFilter/reducer';

const selectTasks = state => state.entities.tasks;
const filters = state => state.filters;

export const selectVisibleTasks = createSelector(
  [selectTasks, filters],
  (tasks, filter) => {
    switch (filter.byStatus) {
      case statusFilters.SHOW_ALL:
        return (filter.byCategory !== categoryFilters.SHOW_ALL)
          ? tasks.filter(task => task.category === filter.byCategory)
          : tasks;

      case statusFilters.SHOW_ACTIVE:
        return tasks.filter(task => {
          return (filter.byCategory !== categoryFilters.SHOW_ALL)
            ? (task.category === filter.byCategory) && !task.completed
            : !task.completed
        })

      case statusFilters.SHOW_COMPLETED:
        return tasks.filter(task => {
          return (filter.byCategory !== categoryFilters.SHOW_ALL)
            ? (task.category === filter.byCategory) && task.completed
            : task.completed
        })

      default:
        throw new Error("Неизвестный фильтр: " + filter);
    }
  }
)