import React from "react";
export default function Test() {
  return (
    <div>
      <button className="w-[150px] h-[50px] bg-slate-400 rounded-[12px] m-[4px] hover:bg-green-300 transition-all duration-1000">
        send
      </button>
      {/* delling with the flex */}
      <div className="bg-red-200 flex w-[100%] h-[100px] justify-center">
        <div className=" bg-pink-400">
          <span>div 1</span>
        </div>
        <div className=" bg-black">
          <span>div 1</span>
        </div>
        <div className=" bg-green-500">
          <span>div 1</span>
        </div>
      </div>
    </div>
  );
}
