import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("TASK_ADD");
export const toggleTask = createAction("TASK_TOGGLE");
export const removeTask = createAction("TASK_REMOVE");