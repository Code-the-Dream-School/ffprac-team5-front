import React, { useState } from "react";
import axios from "axios";
import styles from './../css/Login.module.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error occurred:", error);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
      </div>

      <div className={styles.right}>
        <h1>Recipe Finder</h1>
        <h6>A tool to help you use up those leftover ingredients</h6>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2>Log In or Sign Up for Free</h2>
          <div className={styles.field}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="current-email"
            />
          </div>
          <div className={styles.field}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className={styles.field}>
          <div>Create New Account</div>
          <div>Continue as Guest</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
