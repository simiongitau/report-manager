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
    <form
      className="register flex justify-center items-center"
      onSubmit={Register}
    >
      <div className="register_container flex flex-col bg-[#c8eaf4] w-[550px]">
        <h4 className="mb-2 ml-10">register</h4>

        <span className="text-[24px] ml-10">name</span>
        <input
          required
          onChange={(e) => setName(e.target.value)}
          className=" p-2.5 w-[90%]  ml-10 "
        />

        <span className="text-[24px] ml-10 ">email</span>
        <input
          required
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className=" p-2.5 w-[90%]  ml-10"
        />
        <span className="text-[24px] ml-10"> password</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className=" p-2.5 w-[90%]  ml-10 "
        />
        <span className="text-[24px] ml-10 ">confirm password</span>
        <input
          required
          onChange={(e) => setconfirm(e.target.value)}
          type="password"
          className=" p-2.5 w-[90%]  ml-10"
        />
        <button type="submit" className=" mt-8 mb-10 ml-[5%] p-2.5 w-[150px] ">
          submit
        </button>
      </div>
    </form>
  );
}
