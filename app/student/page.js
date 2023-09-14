import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Student-Home-Page",
};

const page = () => {
  return (
    <div >
      <Link href="/student/signin">Signin</Link>
      <br />
      <Link href="/student/signup">Signup</Link>
    </div>
  );
};

export default page;
