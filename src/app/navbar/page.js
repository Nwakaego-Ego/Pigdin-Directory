import React from "react";

export default function about() {
  return (
    <nav className="flex justify-between p-10">
      <div>
        <div>LOGO</div>
      </div>
      <div className="flex ">
        <p className="">Login</p>
        <button className=" w-20 h-8  text-sm bg-btnBg text-black rounded-xl border-red-700">
          Signup
        </button>
      </div>
    </nav>
  );
}
