import { GoogleLogin } from "@react-oauth/google"
import React, { useState } from "react"
import { jwtDecode } from "jwt-decode"
import { Link, Navigate, useNavigate } from "react-router-dom"
import Dashboard from "./Dashboard"

const SigninForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const handleSuccess = (credentialResponse) => {
    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
    const email = credentialResponseDecoded.email;
    console.log(credentialResponseDecoded)
    const name = credentialResponseDecoded.name;
    setUserData({ email, name });
  };

  if (userData) {
    // return <Dashboard emailid={userData.email} name={userData.name} />;
    navigate('/dashboard', {state: userData})
    
  }

  const handleadmin = () =>{
    navigate("/admin/signin")
  }

  return (
    <>
    <div className="container">
      <div className="signin-container">
        <h2>Internship Course Exemption</h2>
        <GoogleLogin 
          onSuccess={handleSuccess}
          onError={() => { console.error("Failed to login") }}
          // render={({ onClick }) => (
          //   <button onClick={onClick} className="signin-button">
          //     Sign in with Google
          //   </button>
          // )}
        />
       <p>Sign in with your BIT account</p>
       <button onClick={handleadmin} className="admin-button">Admin</button>
      </div>
      </div>
    </>
  );
}

export default SigninForm;
