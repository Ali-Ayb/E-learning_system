import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import UseHttp from "../../hooks/http-hook";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const sendData = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // const formData = new FormData();
    // formData.append("email", email);
    // formData.append("password", password);

    const body = {
      email: email,
      password: password,
    };

    const data = await UseHttp("register", "POST", body);
    if (data.success) navigate("/login");
  };

  return (
    <div className="reg-container">
      <div className="register-container">
        <h1 className="register-title">Register</h1>
        <div className="register-form">
          <div>
            <label htmlFor="email">Choose a email</label>
            <input id="email" placeholder="email" ref={emailRef} />
          </div>
          <div>
            <label htmlFor="password">Enter your Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </div>
        </div>
        <button
          type="submit"
          className="register-button"
          id="register-button"
          onClick={sendData}>
          Register
        </button>
        <div className="register-link">
          Already registered? <a href="/login">Login Now</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
