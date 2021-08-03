import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import "./Form.css";

const Form = (props) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    timezone: "",
    captcha: true,
    checked: false,
  });
  const { first_name, last_name, username, email, password, timezone } =
    formData;

  const submitData = {
    first_name,
    last_name,
    username,
    email,
    password,
    timezone,
    captcha: true,
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    props.submitFormData(submitData);
    setFormData({
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      timezone: "",
      captcha: true,
      checked: false,
    });
  };
  const checkBoxHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, checked: !formData.checked });
  };
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="container">
      <div className="form-header">
        <div className="c-btn-group">
          <NavLink activeClassName="active" className="c-btn" to="/fan-signup">
            FAN SIGNUP
          </NavLink>
          <NavLink
            activeClassName="active"
            className="c-btn"
            to="/talent-signup"
          >
            TALENT SIGN UP
          </NavLink>
        </div>
        <h3>Create your Fan account</h3>
      </div>

      <form className="form" onSubmit={submitFormHandler}>
        <div className="form-group">
          <label className="required" htmlFor="Firstname">
            Firstname
          </label>
          <div className="form-input">
            <input
              type="text"
              placeholder="Firstame"
              name="first_name"
              label="name"
              value={formData.first_name}
              required
              onChange={(e) => changeHandler(e)}
            />
          </div>

          <label className="required" htmlFor="Lastname">
            Lastname
          </label>
          <div className="form-input">
            <input
              type="text"
              placeholder="Lastname"
              name="last_name"
              label="name"
              value={formData.last_name}
              onChange={(e) => changeHandler(e)}
              required
            />
          </div>

          <label className="required" htmlFor="Username">
            Username
          </label>
          <div className="form-input">
            <input
              type="text"
              placeholder="Username"
              name="username"
              label="name"
              value={formData.username}
              onChange={(e) => changeHandler(e)}
              required
            />
          </div>

          <label className="required" htmlFor="Email">
            Email
          </label>
          <div className="form-input">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={(e) => changeHandler(e)}
              required
            />
          </div>
          <label className="required" htmlFor="TimeZone">
            Time-Zone
          </label>
          <div className="form-input">
            <select
              name="timezone"
              value={formData.timezone}
              onChange={(e) => changeHandler(e)}
            >
              <option value="IST">IST</option>
              <option value="America/New_York">EST</option>
              <option value="BST">BST</option>
            </select>
          </div>

          <label className="required" htmlFor="Password">
            Password
          </label>
          <div className="form-input">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={(e) => changeHandler(e)}
              minLength="6"
            />
          </div>
        </div>
        <div className="btn-footer">
          <div className="check-group">
            <input type="checkbox" onChange={checkBoxHandler} />
            <label>
              I agree to the <span className="terms">Terms and conditions</span>
            </label>
          </div>

          <Link to="/login">
            <button type="submit" onClick={submitFormHandler}>
              SIGN UP
            </button>
          </Link>
          <label>
            already have an account? <span className="terms">Log In</span>
          </label>
        </div>
      </form>
    </section>
  );
};
export default Form;
