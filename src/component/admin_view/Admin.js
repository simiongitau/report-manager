import React from "react";
import "./admin.css";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Admin() {
  // state
  const [uploaded, setUploaded] = useState([]);
  const getAllData = () => {
    axios.get("https://tukenya/logic").then((respond) => {
      setUploaded(respond.data);
    });
  };
  useEffect(() => {
    getAllData();
  }, []);
  console.log(uploaded);
  return (
    <div className="wrapper_container">
      <div className="admin_info">
        <div className="left">
          <span className="mt-[30px] ml-[30px] font-[400]">view documents</span>
          <ul className="unordered_list ml-[60px] h-[200px] mt-[10px]">
            <li className="mt-[10px]">upload.pdf</li>
            <li className="mt-[10px]">upload.jpg</li>
            <li className="mt-[10px]">upload.doc</li>
            <li className="mt-[10px]">upload.jpg</li>
          </ul>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
