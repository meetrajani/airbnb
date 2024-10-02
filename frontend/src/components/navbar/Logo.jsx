import React from "react";
import { useNavigate } from "react-router-dom";
import LogoImage from "../../images/logo.png"; 


const Logo = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        onClick={() => navigate("/")}
        alt="Logo"
        className="hidden cursor-pointer md:block"
        height="100"
        width="100"
        src={LogoImage}
      />
    </div>
  );
};

export default Logo;
