"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { asyncCurrentStudent } from "@/store/Actions/studentActons";
import { useDispatch } from "react-redux";

export const metadata = {
  title: "Home-Page",
};
const page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentStudent());
  }, []);

  return (
    <div>
      <Link href="/student">student</Link>
    </div>
  );
};

export default page;
