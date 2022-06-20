import React from "react";
import "./verification.css";
import axios from "axios";
import { useState } from "react";
import { computeHeadingLevel } from "@testing-library/react";
import { useSelector } from "react-redux";
export default function Verification() {
  // get input
  const [firtDigit, setFirst] = useState();
  const [second, setSecond] = useState();
  const [third, setThird] = useState();
  const [fourth, setFouth] = useState();
  const [firth, setFith] = useState();
  const [six, setSix] = useState();
  const { currentUser } = useSelector((state) => state.user);

  // methodto hand value
  const sendCord = async () => {
    let combine = firtDigit + second + third + fourth + firth + six;

    const data = {
      userId: currentUser._id,
      otp: combine,
    };
    await axios
      .post(
        `https://ducumentmonitoringapp.herokuapp.com/api/v1/email/verify-email`,
        data
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    console.log("you send value");
  };
  return (
    <div className="verification_container">
      <div className="verification">
        <h4>verification</h4>
        <span className="verfy_code rounded-[10px]">
          <input
            className="rounded-l-[10px]"
            type="Number"
            max="9"
            min="0"
            onChange={(e) => setFirst(e.target.value)}
          />
          <input
            type="Number"
            max="9"
            min="0"
            onChange={(e) => setSecond(e.target.value)}
          />
          <input
            type="Number"
            max="9"
            min="0"
            onChange={(e) => setThird(e.target.value)}
          />
          <input
            type="Number"
            max="9"
            min="0"
            onChange={(e) => setFouth(e.target.value)}
          />
          <input
            type="Number"
            max="9"
            min="0"
            onChange={(e) => setFith(e.target.value)}
          />
          <input
            className="rounded-r-[10px]"
            type="Number"
            max="9"
            min="0"
            onChange={(e) => setSix(e.target.value)}
          />
        </span>
        <button onClick={sendCord}>verify</button>
        <div className="confirm_message">
          <span>did not receive verification code?</span>
          <span className="End mt-2">resend again.</span>
        </div>
      </div>
    </div>
  );
}
