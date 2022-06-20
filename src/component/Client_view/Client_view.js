import React from "react";
import "./client.css";
export default function Client_view() {
  return (
    <div className="client">
      <div className="client-info">
        <div className="display_feedback">
          <span className="mt-[30px] ml-[30px]">File upload</span>
          <span className=" ml-[30px] mt-[20px]">view feedback</span>
        </div>
        <div className="view_content"></div>
      </div>
    </div>
  );
}
