import React from "react";
import "./login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginInitiate } from "../../redux/actions";

export default function Login() {
  // setting state for email and password
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // navigate
  let navigate = useNavigate();
  // fetching data from the backnend

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      if (!currentUser.foundUser.verified) {
        navigate("/verification");
      }
    }
  }, [currentUser, navigate]);

  // function to handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginInitiate(email, password));
  };

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
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
        />
        <button onClick={handleSubmit}>submit</button>
      </div>
    </form>
  );
}
