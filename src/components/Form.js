import React, { useCallback, useState } from "react";
import "./Form.css";

import FormSignup from "./FormSignup";
import Success from "./Success";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = useCallback(() => {
    setIsSubmitted(true);
  }, [setIsSubmitted]);
  return (
    <div className="background">
      <div className="form__container">
        <div className="form__left">
          <img
            className="form__img"
            src="https://c.tenor.com/6hVEKMxmQLUAAAAC/cat-laptop.gif"
            alt="spaceship"
          />
        </div>

        {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <Success />}
      </div>
    </div>
  );
};

export default Form;
