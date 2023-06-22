import React from "react";

export default function navbar() {
  return (
    <nav className="container  flex justify-between p-10 ">
      <div>
        <div>LOGO</div>
      </div>
      <div className="flex ">
        <p className="">Login</p>
        <button className=" w-20 h-8  text-sm bg-btnBg text-black relative left-10 rounded-xl border-red-700">
          Signup
        </button>
      </div>
    </nav>
  );
}
