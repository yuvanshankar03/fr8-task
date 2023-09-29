import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export default function Admincreate() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail]=useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleRegistration(e) {
    e.preventDefault();

    axios.post("http://localhost:3001/adminregister", { username, password, email })
      .then((response) => {
        console.log(response.data);
        alert(response.data.message);
        setUsername("");
        setPassword("");
        setEmail("");
        navigate("/adminlogin")
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred during registration.");
      });
  }
  return (
    <div className="App">
      <div className="container">
        <h2>Admin Register</h2>
        <form onSubmit={handleRegistration}>
          <input
            className="form-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
            <input
            className="form-input"
            type="email"
            placeholder="email@123"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="form-button" type="submit">
            Register
          </button>
          <h3>Already an user?</h3>
          {error && <div className="form-error">{error}</div>}
        </form>
        <Link to='/adminlogin' style={{textDecoration:"none"}}><button className="form-button" type="submit">login</button></Link>
      </div>
    </div>
  );
}
