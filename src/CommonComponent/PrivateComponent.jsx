import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateComponent({ children }) {
  const { islogin } = useSelector((state) => state.login);
  if (islogin) {
    return children;
  }
  
  return <Navigate to="/login" />;


}

export default PrivateComponent;
