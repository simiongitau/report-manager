import React from "react";
import { useEffect, useState } from "react";
import "./fileupload.css";
import axios from "axios";
import { useRef } from "react";
export default function Fileupload() {
  // setting state
  const [dragActive, setDragActive] = useState(false);
  const [upload, setUploaded] = useState([]);
  const fileRef = useRef(null);
  // method to handle drag file
  const handleDrag = function (e) {
    e.prevetDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  // useEffect method to dispay files
  const getUploadedFile = () => {
    axios.get("https://tukenya/logic").then((respond) => {
      setUploaded(respond.data);
    });
  };
  useEffect(() => {
    getUploadedFile();
  }, []);
  //posting the file

  return (
    <div className="upload_container">
      <div className="upload_region">
        <div className="upload_section rounded-l-[10px]" onDrag={handleDrag}>
          <h4>upload your file</h4>

          <i className="bi bi-upload"></i>
          <span>drag and drop your files</span>

          <div className=" flex">
            <input
              ref={fileRef}
              type="file"
              className="hidden"
              onChange={(e) => setDragActive(e.target.value)}
              multiple={false}
            />

            <button
              className="bg-[#292779] text-white py-1 px-4 mx-auto"
              onClick={() => fileRef.current.click()}
            >
              Upload file
            </button>
          </div>
        </div>

        <div className="uploaded_file rounded-r-[10px] pt-[70px] pl-[20px]">
          <span className="mb-10">
            <span className="text_name rounded-full mr-10">txt</span>
            <span className="display_file">uploaded.txt</span>
          </span>
          <span className="mb-10">
            <span className="text_name rounded-full mr-10">jpg</span>
            <span>uploaded.jpg</span>
          </span>
          <span className="mb-10">
            <span className="text_name rounded-full mr-10">doc</span>
            <span>uploaded.doc</span>
          </span>
          <span>
            <span className="text_name rounded-full mr-10">pdf</span>
            <span>uploaded.pdf</span>
          </span>
        </div>
      </div>
    </div>
  );
}
