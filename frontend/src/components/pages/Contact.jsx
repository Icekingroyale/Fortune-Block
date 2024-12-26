import React, { useState } from "react";
import "../../stylesheets/pagestyles/contact.css";
import Header from "../Header";
import Footer from "../Footer";
import Copyright from "../Copyright";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.firstname.trim()) {
      formErrors.firstname = "Firstname is required";
    }
    if (!formData.lastname.trim()) {
      formErrors.lastname = "Lastname is required";
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "A valid email is required";
    }
    if (!formData.subject.trim()) {
      formErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);
      // Handle form submission logic here
    }
  };

  return (
    <>
    <Header/>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Firstname</label>
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
            <label>Lastname</label>
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
            <label>Subject</label>
            <input
              placeholder="Subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className="error">{errors.subject}</p>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              placeholder="Write message here..."
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
        <Footer />
        <Copyright />
    </>
  );
};

export default ContactUs;
