import React from "react";
import "./correction.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Correction() {
  const [data, setData] = useState([]);
  console.log(data);
  // method to fetch data
  const getData = async () => {
    const { backend } = await axios.get(`https://yesno.wtf/api`);
    setData(backend);
  };
  // hook for mounting data
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="message_container  h-[100vh] p-[20px]">
      <div className="messaage_section  h-full">
        <h4 className="capitalize pt-[30px] pl-[15px] pb-[20px] font-bold">
          correction to be made
        </h4>
        <section
          className="h-[400px] mr-2 ml-2 border-[1.5px] border-gray-700 rounded-[4px] capitalize pl-[12px] pt-[5px]
          bg-white message"
          placeholder="message"
        ></section>
        <Link to="/fileupload">
          <h4 className="ml-[15px] capitalize  mt-[130px] p-2 w-[200px] font-[500] text-[#292779]">
            resend document
          </h4>
        </Link>
      </div>
    </div>
  );
}
