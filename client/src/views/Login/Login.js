import React from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  return (
    <div>
      <h1 className="auth-heading">Before you start please Login first 🡆</h1>

      <form className="auth-form">
        <label htmlFor="email" className="auth-form-heading">
          Enter email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="email"
          className="user-input"
          // value={user.email}
          // onChange={(e) => {
          //     setUser({ ...user, email: e.target.value })
          // }}
        />

        <label htmlFor="password" className="auth-form-heading">
          Enter password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="password"
          className="user-input"
          // value={user.password}
          // onChange={(e) => {
          //     setUser({ ...user, password: e.target.value })
          // }}
        />

        <button
          type="button"
          className="auth-btn"
          //
        >
          Login
        </button>

        <Link to="/login" >
          <p>Don't have an account?Signup</p>
        </Link>
      </form>

      <Toaster />
    </div>
  );
}

export default Login;
