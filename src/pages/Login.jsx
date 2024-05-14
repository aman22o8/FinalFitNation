import React from "react";
import Template from "../components/Template";

const Login = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome to Fitness Journey"
      // desc1="Embark on a journey to a healthier you. "
      // desc2="Step into our virtual fitness hub, where motivation meets sweat."
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Login;
