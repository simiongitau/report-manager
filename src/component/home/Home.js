import React from "react";
import "./home.css";
import logo from "../../assert/company.jpg";
import { useEffect, useState } from "react";
export default function Home() {
  // state management
  const [name, setName] = useState("");
  const [email, setEmail] = useState(0);
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState("");
  // method to handle submit
  console.log(email);
  console.log(name);
  return (
    <div className="Main">
      {/* image div */}

      <div className="left_container">
        <span>glitex solutions ltd</span>
        <img src={logo} alt="photo" />
      </div>
      {/* information div */}
      <div className="right_container">
        <span>full name</span>
        <input
          placeholder="full name eg john maina"
          className="input"
          onChange={(e) => setName(e.target.value)}
        />
        <span>id number</span>
        <input placeholder="full name eg john maina" className="input" />
        <span>email address</span>
        <input placeholder="full name eg john maina" className="input" />
        <span>phone number</span>
        <input placeholder="full name eg john maina" className="input" />
        <span>url here</span>
        <input placeholder="full name eg john maina" className="input" />
        <span>or</span>
        <sapn>
          get file from folders <input type="file" className="file_input" />
          <span>file choosen</span>
        </sapn>
        <button onClick={() => console.log("you click me")}>save change</button>
      </div>
    </div>
  );
}
