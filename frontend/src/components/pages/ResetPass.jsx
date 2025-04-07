import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/pagestyles/ResetPass.css"; // Reuse the same CSS
import Header from "../Header";
import Footer from "../Footer";
import Copyright from "../Copyright";
import ScrollAnimation from "../animations/ScrollAnimation";


const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const validateForm = () => {
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("A valid email is required");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Reset link sent to", email);
      // Implement the reset password logic here
    }
  };

  return (
    <>
      <Header />
      <ScrollAnimation>

        <div className="reset-password-container">
          <form onSubmit={handleSubmit} className="reset-password-form">
            <h2>Password Reset</h2>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
              {error && <p className="error">{error}</p>}
            </div>

            <button type="submit" className="reset-btn">
              Reset Password
            </button>

            <div className="form-links">
              <p>
                <Link to="/register"> Not yet a member? Sign up here</Link>
              </p>
              <p>
                <Link to="/">Home</Link>
              </p>
            </div>
          </form>
        </div>
        <Footer />
        <Copyright />
      </ScrollAnimation>
    </>
  );
};

export default ResetPassword;
