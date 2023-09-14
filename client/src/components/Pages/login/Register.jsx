import React, { useState } from "react";
import { registerUser } from "../../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../../store/slices/userSlice";
function Register(props) {
  const { userToken } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const user = {
    name: "john",
    email: "email@test.com",
    password: "123",
    confirmPassword: "123",
  };
  const [userZ, setUser] = useState(user);
  let navigate = useNavigate();
  const recordInput = (e) => {
    const { name, value } = e.target;

    setUser({ ...userZ, [name]: value });
    console.log(userZ);
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(registerUser(userZ)).unwrap();
      navigate("/account");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <img
        src="https://www.wallpaperup.com/uploads/wallpapers/2013/09/29/153361/44e5a3fd8a183ce3ab4d2130ba1b66bb.jpg"
        className="w-full h-20 object-cover object-top "
        alt="blue sky"
      />

      <div className="test11 ">
        {userToken ? "logged in" : "not auth"}
        <button onClick={() => dispatch(logOut())}>
          log out
        </button>
      </div>
      <div className="my-20">
        <h2 className="text-2xl text-center my-4 md:my-6">
          Register
        </h2>
        <div className="form  p-2 md:p3 rounded-md  max-w-xl mx-auto my-4">
          <form className="w-full border border-black rounded-md p-3 md:p-4">
            <div className="flex flex-col my-2">
              <label className="mx-1">Username</label>
              <input
                onChange={recordInput}
                className="border rounded-md p-2"
                type="text"
                name="userName"
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="mx-1">Email</label>
              <input
                onChange={recordInput}
                className="border rounded-md p-2"
                type="text"
                name="email"
              />
            </div>
            <div className="flex flex-col my-4">
              <label className="mx-1">Password</label>

              <input
                className="border rounded-md p-2"
                onChange={recordInput}
                type="password"
                name="password"
              />
            </div>
            <div className="flex flex-col my-4">
              <label className="mx-1">
                Password Confirm
              </label>

              <input
                className="border rounded-md p-2"
                onChange={recordInput}
                type="password"
                name="confirmPassword"
              />
            </div>

            <button
              onClick={registerHandler}
              className="w-full my-4 border-none"
            >
              Register
            </button>
          </form>
          <div className="text-right mx-3">
            <p>
              Do you have an account?
              <Link to="/account">
                <b> Login </b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
