import { configureStore } from "@reduxjs/toolkit";
import  studentReducer  from "@/store/Reducers/studentReducer";

export const store = configureStore({
  reducer: {
    studentReducer,
  },
});
