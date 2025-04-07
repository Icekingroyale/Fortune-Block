import React, { useState } from "react";
import "../../stylesheets/pagestyles/Register.css";
import countries from "../../data-countries.json"; // Import the JSON file
import Header from "../Header";
import Footer from "../Footer";
import Copyright from "../Copyright";
import { Link } from "react-router-dom";
import ScrollAnimation from "../animations/ScrollAnimation";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [countrySelected, setCountrySelected] = useState(false); // Track if a country has been selected

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "country" && value !== "") {
      setCountrySelected(true); // Mark that a country has been selected
    }
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.firstname.trim())
      formErrors.firstname = "First name is required";
    if (!formData.lastname.trim())
      formErrors.lastname = "Last name is required";
    if (!formData.username.trim()) formErrors.username = "Username is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "A valid email is required";
    }
    if (!formData.country.trim()) formErrors.country = "Country is required";
    if (formData.password.length < 6)
      formErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);
      // Submit the form
    }
  };

  return (
    <>
      <Header />
      <ScrollAnimation>

        <div className="signup-container">
          <form onSubmit={handleSubmit} className="signup-form"
            method='POST' >
            <h2>Sign Up</h2>
            <div className="form-group">
              <label>First Name</label>
              <input
                placeholder="Firstname"
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
              {errors.firstname && <p className="error">{errors.firstname}</p>}
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                placeholder="Lastname"
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
              {errors.lastname && <p className="error">{errors.lastname}</p>}
            </div>

            <div className="form-group">
              <label>Username</label>
              <input
                placeholder="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>

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
              <label>Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="" disabled={countrySelected}>
                  Select a country
                </option>
                {countries.map((country, index) => (
                  <option key={index} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country && <p className="error">{errors.country}</p>}
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

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>

            <button type="submit" className="signup-btn">
              Sign Up
            </button>
            <p className="signin-prompt">
              Already have an account? <Link to="/sign-in">Sign In</Link>
            </p>
          </form>
        </div>
        <Footer />
        <Copyright />
      </ScrollAnimation>
    </>
  );
};

export default SignUp;
