import React from "react";
import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className="w-full min-h-screen bg-blue-800">
      <p className="text-5xl text-center text-red-500">An error occurred!</p>
      <Link
        to="/"
        className=" text-slate-200 text-xl mt-5 py-3 px-7 rounded-xl border-2 border-transparent hover:border-white"
      >
        Return Home
      </Link>
    </div>
  );
};

export default ErrorElement;
