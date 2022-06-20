import React from "react";
import "./feedback.css";
import { useState } from "react";
import axios from "axios";
export default function Feedback() {
  // setting state
  const [message, setMessage] = useState();
  // method to post message
  const postMessage = () => {
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { message })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  return (
    <div className="feedback_container  h-[100vh] p-[20px]">
      <div className="veiw_section  h-full">
        <span className="capitalize pt-[30px] pl-[15px] pb-[20px]">
          view document
        </span>
        <textarea
          placeholder="message"
          className="h-[400px] mr-2 ml-2 border-[1.5px] border-gray-700 rounded-[4px] text_area capitalize pl-[12px] pt-[5px]"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <span className="mt-[130px] ml-[15px] capitalize">write feedback</span>
        <button
          className="w-[150px] bg-[#292779] p-[4px]"
          onClick={postMessage}
        >
          send
        </button>
      </div>
    </div>
  );
}
