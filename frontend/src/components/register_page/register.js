import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import UseHttp from "../../hooks/http-hook";
import { useState } from "react";

const Register = ()=>{
  const navigate = useNavigate();

  const firstNameRef=useRef("");
  const lastNameRef=useRef("");
  const usernameRef=useRef("");
  const passwordRef=useRef("");
  const confirmPasswordRef=useRef("");
  const imageRef=useRef("");

  const [gender, setGender] = useState(""); 
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };


  const sendData = async () => {
    const first_name = firstNameRef.current.value;
    const last_name = lastNameRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const confirm_password = confirmPasswordRef.current.value;
    const image = imageRef.current.files[0];

    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("confirm_password", confirm_password);
    formData.append("image", image)
    formData.append("gender", gender);

    const data = await UseHttp(
      "register",
      "POST",
      formData
    );
    if(data.success)
      navigate("/login")
    };
    
      
    
  return(
    <div className="reg-container">
      <div className="register-container">
        <h1 className="register-title">Register</h1>
        <div className="register-form">
        <div className="name-container">
            <div>
              <label htmlFor="first_name">First Name</label>
              <input type="text" id="first_name" placeholder="First Name" ref={firstNameRef}/>
            </div>
            <div>
              <label htmlFor="last_name">Last Name</label>
              <input type="text" id="last_name" placeholder="Last Name" ref={lastNameRef}/>
            </div>
          </div>
          <div>
            <label htmlFor="username">Choose a Username</label>
            <input id="username" placeholder="Username" ref={usernameRef}/>
          </div>
          <div>
            <label htmlFor="password">Enter your Password</label>
            <input id="password" type="password" placeholder="Password" ref={passwordRef}/>
          </div>
          <div>
            <label htmlFor="confirm_password">Confirm your Password</label>
            <input id="confirm_password" type="password" placeholder="Confirm Password" ref={confirmPasswordRef}/>
          </div>
          <div>
            <label htmlFor="image">Upload your image</label>
            <input id="image" type="file" ref={imageRef}/>
          </div>
          <div id="gender" className="gender">
            <div>
              <label htmlFor="male">Male</label>
              <input type="radio" id="male" value="male" name="gender" checked={gender === "male"} onChange={handleGenderChange}/>
            </div>
            <div>
            <label htmlFor="female">Female</label>
            <input type="radio" id="female" value="female" name="gender" checked={gender === "female"} onChange={handleGenderChange}/>
            </div>
          </div>
          <button type="submit" className="register-button" id="register-button" onClick={sendData}>Register</button>
          <div className="register-link">
            Already registered? <a href="/login">Login Now</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Register