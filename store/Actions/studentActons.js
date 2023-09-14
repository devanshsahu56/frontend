import axios from '@/utils/axios'
import {
  addStudent,
  removeStudent,
  iserror,
  removeError,
} from "../Reducers/studentReducer";
import { toast } from "react-toastify";

export const asyncCurrentStudent = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student");
    console.log(data);
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncSignupStudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/signup", student);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
