import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../App";

const Logout = () => {
  //promises
  const { dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("this is logout page");
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "appliaction/json",
      },
      credentials: "include",
    })
      .then((res) => {
        dispatch({ type: "USER", payload: false });
        localStorage.removeItem("user");
        console.log("logout page", localStorage.getItem("user"));
        navigate("/login", { replace: true });
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <h1>Logout</h1>
    </div>
  );
};

export default Logout;
