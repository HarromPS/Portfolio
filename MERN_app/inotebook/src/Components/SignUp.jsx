import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const SignUp = () => {
  let [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });

  // To redirect to Home page
  let navigate = useNavigate();

  // After form submit
  const onSubmit = async (ele) => {
    ele.preventDefault();

    // check if the password & confirm passwords are correct or not
    if(credentials.password !== credentials.cpassword){
      alert("Password did not match");
      setCredentials({password: "", cpassword: "" });
      return ;
    }

    // Fetch request to get the Authorization token if the credentials are valid
    let url = "http://localhost:3011/api/auth/createuser";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          "name": credentials.name,
          "email": credentials.email,
          "password": credentials.password
        })
    });

    const json = await response.json();

    if (json.success) {
      // Storing the generated token in localStorage
      localStorage.setItem("auth-token", json.authToken);
      console.log(json.authToken);
      alert("Account created");
      navigate("/");
    }
    else {
      alert(json.error);
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
      <h2 className='my-3'>Sign In To Use iNotebook</h2>
        <form className='my-4' onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">User-Name</label>
            <input type="text" className="form-control" onChange={onChange} value={credentials.name} id="name" name="name" aria-describedby="emailHelp" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" onChange={onChange} value={credentials.email} id="email" name="email" aria-describedby="emailHelp" required/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" onChange={onChange} value={credentials.password} id="password" name="password" required minLength={5}/>
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="cpassword" className="form-control" onChange={onChange} value={credentials.cpassword} id="cpassword" name="cpassword" required minLength={5}/>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}
