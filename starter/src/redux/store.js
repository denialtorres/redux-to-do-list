import { confirgureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

export default confirgureStore({
  reducer: {
    todos: todoReducer,
  },
});
