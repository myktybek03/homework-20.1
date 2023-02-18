import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, todo: "Buy Laptop", completed: false },
    { id: 2, todo: "Buy apple", completed: false },
    { id: 3, todo: "Buy pinapple", completed: false },
  ],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    deleteAll(state) {
      state.splice(0, state.length);
    },
    delete(state, action) {
      const filteredTodos = state.filter((todo) => {
        return todo.id !== action.payload;
      });
      return filteredTodos;
    },

    editTodo(state, action) {
      let data = action.payload;
      const updatedArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.todo = data.todo;
          item.completed = data.completed;
        }
        return (state = updatedArray.push(item));
      });
    },
    completeTodo(state, action) {
      let todoArray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        return (state = todoArray.push(item));
      });
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
