import React from "react";

export default function Adminstore() {
  return (
    <div>
      <div className="flex  mx-auto justify-between p-3 items-center capitalize bg-slate-100 sticky z-10 w-full">
        {/* navsection */}
        <span>admin</span>
        <div className="flex items-center gap-2">
          <div className="bg-green-300 p-7 rounded-[25px]"></div>
          <span>profile</span>
        </div>
        {/* content section */}
      </div>
      <div className="w-full bg-slate-200 h-screen p-2 flex ">
        <div className="  w-[15vh] flex flex-col gap-3 text-lg items-center p-2 lg:w-[25vh]">
          <span className="font-bolder capitalize">files</span>
          <span className="bg-gray-400 shadow-sm rounded p-2 cursor-pointer">
            users and roles
          </span>
          <span className="bg-gray-400 shadow-sm w-[80px] p-2 rounded cursor-pointer">
            logout
          </span>
        </div>
        <div className=" w-full grid grid-cols-2 lg:grid-cols-4  ">
          <div className=" bg-pink-100  flex justify-center items-center rounded shadow-sm m-1">
            <i className="bi bi-file-earmark-pdf-fill rounded"></i>
          </div>
          <div className="bg-pink-100  flex justify-center items-center rounded shadow-sm m-1 ">
            <i class="bi bi-file-earmark-word rounded"></i>
          </div>
          <div className="bg-pink-100  flex justify-center items-center rounded shadow-sm m-1">
            <i class="bi bi-file-earmark-arrow-down rounded"></i>
          </div>
          <div className="bg-pink-100  flex justify-center items-center rounded shadow-sm m-1">
            <i class="bi bi-file-earmark-arrow-down rounded"></i>
          </div>
          <div className="bg-pink-100  flex justify-center items-center rounded shadow-sm m-1">
            <i class="bi bi-file-earmark-arrow-down rounded"></i>
          </div>
          <div className="bg-pink-100  flex justify-center items-center rounded shadow-sm m-1">
            <i class="bi bi-file-earmark-arrow-down rounded"></i>
          </div>
          <div className="bg-pink-100  flex justify-center items-center rounded shadow-sm m-1">
            <i class="bi bi-file-earmark-arrow-down rounded"></i>
          </div>
          <div className="bg-pink-100  flex justify-center items-center rounded shadow-sm m-1">
            <i class="bi bi-file-earmark-arrow-down rounded"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
