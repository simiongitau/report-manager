import React, { useEffect, useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerInitiate } from "../../redux/actions";

export default function Register() {
  // state and getting input value
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setconfirm] = useState();

  const navigate = useNavigate();
  // get thecurrent user
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      navigate("/verification");
    }
  }, [navigate, currentUser]);

  // method onsubmit
  const Register = async (e) => {
    e.preventDefault();
    dispatch(registerInitiate(name, email, password, passwordConfirmation));
    // console.log("you have register");
  };
  return (
    <form className="register" onSubmit={Register}>
      <div className="register_container">
        <h4>register</h4>
        <span>name</span>
        <input required onChange={(e) => setName(e.target.value)} />
        <span>email</span>
        <input
          required
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <span>password</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>confirm password</span>
        <input
          required
          onChange={(e) => setconfirm(e.target.value)}
          type="password"
        />
        <button type="submit">submit</button>
      </div>
    </form>
  );
}
