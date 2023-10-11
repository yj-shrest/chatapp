import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="flex justify-center">
    <div className="flex justify-center my-[20vh] bg-green-300 w-[20rem] rounded-2xl">
      <div className="flex flex-col">
        <p className="text-center pb-3 text-[2rem]">Login</p>
        <form action="form-control" className="flex flex-col">
        <label htmlFor="Username" className="text-[1.2rem]">Username</label>
        <input type="text" placeholder="" className="border-2 rounded-3xl text-[1rem] mb-1 pl-2" />
        <label htmlFor="Username" className="text-[1.2rem]">Password</label>
        <input type="password" placeholder="" className="border-2 rounded-3xl text-[1rem] mb-3 pl-2" />
        <Link to="/Menu" className="bg-white my-5 rounded-xl text-[1.2rem]">Login</Link>
        </form>
      </div>
    </div>
    </div>
  );
}
