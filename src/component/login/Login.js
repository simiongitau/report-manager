import React from "react";
import "./login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login() {
  // setting state for email and password
  const [email, setEmail] = useState();
  const [password, setPassord] = useState();
  const [backend, setBackend] = useState([]);
  // navigate
  let navigate = useNavigate();
  // fetching data from the backnend
  const getAllData = () => {
    axios.get("https://tukenya/logic").then((respond) => {
      setBackend(respond.data);
    });
  };
  useEffect(() => {
    getAllData();
  }, []);
  console.log(backend);
  // function to handle submit
  function handleSubmit() {
    if (backend.email === password && backend.password) {
      navigate("/register");
    } else {
      navigate("/register");
    }
  }
  console.log(password);
  console.log(email);
  return (
    <form className="main_container">
      <div className="container">
        <h4>login</h4>
        <span>email</span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
        />
        <span>password</span>
        <input
          onChange={(e) => setPassord(e.target.value)}
          required
          type="passwod"
        />
        <button onClick={handleSubmit}>submit</button>
      </div>
    </form>
  );
}
