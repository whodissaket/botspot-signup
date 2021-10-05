import React from "react";
import useForm from "../hooks/useForm";
import validate from "../hooks/validateInfo";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form__right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Sign Up</h1>
        <div className="form__inputs">
          <label className="form__lbl">Username</label>
          <input
            className="form__input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form__inputs">
          <label className="form__lbl">Email</label>
          <input
            className="form__input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form__inputs">
          <label className="form__lbl">Password</label>
          <input
            className="form__input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form__inputs">
          <label className="form__lbl">Confirm Password</label>
          <input
            className="form__input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form__input_btn" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
