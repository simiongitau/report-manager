import React from "react";
import "./document.css";
import axios from "axios";
import { useState } from "react";
export default function Document() {
  // state
  const [correction, setCorrection] = useState();

  // method to retrive the data
  const postCorrection = () => {
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { correction })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  return (
    <div className="document_container">
      <div className="sub_container h-[600px] w-[1200px] rounded-[10px]">
        <h4 className="capitalize text-[24px] font-bold mt-[20px] ml-[50%]">
          feedback
        </h4>
        <span className="ml-[20px] mb-9 text-[17px]">
          Anything that can be corrected?
        </span>
        <textarea
          placeholder="write you message here"
          className="h-[400px] ml-[20px] mr-[20px] rounded-[10px] pl-[25px] pt-4 border-[1.5px] border-gray-600 "
          onChange={(e) => setCorrection(e.target.value)}
        ></textarea>
        <button
          className="w-[150px] mt-[20px] text-[18px] p-[4px] capitalize"
          onClick={postCorrection}
        >
          submit
        </button>
      </div>
    </div>
  );
}
