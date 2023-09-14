"use client"
import React from "react";
import { asyncSignupStudent } from "@/store/Actions/studentActons";
import { useDispatch } from "react-redux";

const page = () => {

  const dispatch = useDispatch()
  const signupHandler = () => {
    const newStudent = {
      firstname: "John",
      lastname: "John",
      contact: "7974085093",
      city: "bhopal",
      gender: "male",
      email: "dev@bhopal.com",
      password: "123456",
    };
    dispatch(asyncSignupStudent(newStudent))
  };

  return (
    <div>
      <button onClick={signupHandler}>signup</button>
    </div>
  );
};

export default page;
