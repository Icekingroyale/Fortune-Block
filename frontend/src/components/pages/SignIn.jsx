import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/pagestyles/SignIn.css"; // Reuse the same CSS file
import Footer from "../Footer";
import Copyright from "../Copyright";
import Guarantee from '../Guarantee'
import Header from "../Header";
import Dashboard from "../layouts/Dashboard"

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "A valid email is required";
    }
    if (!formData.password.trim()) {
      formErrors.password = "Password is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoggedIn(true);
      // console.log("Form submitted", formData);
      // Handle form submission logic here
    }
  };

  if (isLoggedIn){
    return <Dashboard />
  }

  return (
    <>
    <Header />
      <div className="signin-container">
        <form onSubmit={handleSubmit} className="signin-form">
          <h2>Sign In</h2>

          <div className="form-group">
            <label>Email</label>
            <input
              placeholder="E-mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="form-group-checkbox-group">
            <label>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Remember Me
            </label>
            <Link to="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="signin-btn">
            Login
          </button>

          <p className="signup-prompt">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </form>
      </div>
      <Guarantee />
      <Footer />
      <Copyright />
    </>
  );
};

export default SignIn;
