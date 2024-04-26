import React, { useState } from "react";
import axios from "axios";

const SignupForm = () => {

  // todo: combine this with Signup.jsx

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === verifyPassword);
  };

  const handleVerifyPasswordChange = (e) => {
    setVerifyPassword(e.target.value);
    setPasswordsMatch(e.target.value === password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordsMatch) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8000/signup", {
        username,
        password,
      });
      console.log("Server response:", response.data);
      setUsername("");
      setPassword("");
      setVerifyPassword("");
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoComplete="current-username"
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          autoComplete="current-password"
        />
      </div>
      <div>
        <label>Verify Password:</label>
        <input
          type="password"
          value={verifyPassword}
          onChange={handleVerifyPasswordChange}
          required
          autoComplete="curren-password"
        />
      </div>
      {!passwordsMatch && <p>Passwords do not match!</p>}
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
