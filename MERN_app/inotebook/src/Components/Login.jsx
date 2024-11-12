import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  let [credentials, setCredentials] = useState({ email: "", password: "" });

  // To redirect to Home page
  let navigate = useNavigate();

  // After form submit
  const onSubmit = async (ele) => {
    ele.preventDefault();

    // Fetch request to get the Authorization token if the credentials are valid
    let url = "http://localhost:3011/api/auth/login";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": credentials.email,
        "password": credentials.password
      })
    });

    const json = await response.json();

    if(json.success){
      // Storing the generated token in localStorage
      localStorage.setItem("auth-token",json.authToken);
      alert("logged In");
      navigate("/");
    }
    else{
      alert("Invalid Credentials");
    }

  }

  const onChange = (e) => {
    // console.log(credentials);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  }
  return (
    <>
      <div className="container mx-3 my-4">
      <h2 className='my-3'>Login To Continue iNotebook</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" onChange={onChange} value={credentials.email}  id="email" name="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" onChange={onChange} value={credentials.password}  id="password" name="password" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}
