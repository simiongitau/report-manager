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
      navigate("/login");
    }
  }, [navigate, currentUser]);

  // method onsubmit
  const Register = (e) => {
    e.preventDefault();
    dispatch(registerInitiate(name, email, password, passwordConfirmation));
    // console.log("you have register");
  };
  return (
    <form
      className="register flex justify-center items-center"
      onSubmit={Register}
    >
      <div className="register_container flex flex-col bg-[#c8eaf4] w-[500px] h-fit p-4">
        <h4 className="mb-4">register</h4>

        <div className="flex flex-col my-2 w-full">
          <label className="text-[20px]">name</label>
          <input
            required
            onChange={(e) => setName(e.target.value)}
            className=" p-2"
          />
        </div>

        <div className="flex flex-col my-2 w-full">
          <label className="text-[20px]">email</label>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className=" p-2"
          />
        </div>

        <div className="flex flex-col my-2 w-full">
          <label className="text-[20px]"> password</label>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className=" p-2"
          />
        </div>

        <div className="flex flex-col my-2 w-full">
          <label className="text-[20px]">confirm password</label>
          <input
            required
            onChange={(e) => setconfirm(e.target.value)}
            type="password"
            className=" p-2"
          />
        </div>

        <div className="mt-4">
          <button type="submit" className="p-2.5 w-[150px] ml-[150px] ">
            submit
          </button>
        </div>
      </div>
    </form>
  );
}
