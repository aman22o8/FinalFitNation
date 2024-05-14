import React from "react";
import Template from "../components/Template";

const Signup = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="FitFam: Your Virtual Fitness Community"
      // desc1="Step into a world of possibility, emerge with strength and vitality. "
      // desc2="Welcome to our virtual fitness community, where motivation meets transformation."

      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />

  );
};

export default Signup;
