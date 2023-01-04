import React, { useState } from "react";
import cover from "../img/LoginNewwCopy.jpg";
import { useNavigate } from "react-router-dom";
import './styles/Login.css';
// import { UserContext } from "../App";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (user) => {
    return fetch(`/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    signin({ email, password }).then((data) => {
      let user = {
        id: data.userLogin._id,
        name: data.userLogin.username,
        type: data.userLogin.usertype,
        email: data.userLogin.email,
        phone: data.userLogin.phone,
      };
      localStorage.setItem("user", JSON.stringify(user));
      if (data.error) {
        window.alert("Invalid Credentials");
      } else {
        window.alert("Login Successfull");
        window.location.assign("/");
      }
    });
  };

  const moveTOsignup = () => {
    navigate("/signup");
  };

  // const [allEntry, setAllEntry] = useState([]);

  // const submitForm = (e) => {
  //     e.preventDefault();
  //     const newEntry = {email: email, password: password};

  //     setAllEntry([...allEntry, newEntry]);
  //     console.log(allEntry);
  // }

  return (
    <div className="login-page">
      <div className="log-in">
        <div className="log-in-image">
          <img className="peak" src={cover} alt="" />
        </div>
        <div className="log-in-text">
          <h1>Log In</h1>
          <hr className="small-line"></hr>
          <form method="POST" id="register-form">
            <div className="l-email-box">
              <input
                type="text"
                id="email"
                autoComplete="off"
                name="text"
                value={email}
                placeholder=" Email"
                className="l-email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                autoComplete="off"
                name="text"
                value={password}
                placeholder=" Password"
                className="l-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <div className="forgot">
              <div>
                <form>
                  <input type="checkbox"></input>
                  <label for="checkbox1">
                    {" "}
                    <b> Remember me</b>
                  </label>
                </form>
              </div>
              <div className="forgot2">
                <button className="forgot2">Forget Password?</button>
              </div>
            </div> */}
            <div>
              <button onClick={loginUser} type="submit" className="l-button">
                Log In
              </button>
            </div>
          </form>
          <div className="no-account">
            <p>
              Don't have an account?
            </p>
            <button className="l-signup" onClick={moveTOsignup}>
              Sign up
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
