import { useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import useFormValidation from "../../hooks/useFormValidation";

const Register = ({
  isOpen,
  onClose,
  onRegisterSubmit,
  onSignInClick,
  hasError,
}) => {
  const { values, handleChange, errors, isValid, handleFormReset } =
    useFormValidation();

  // When form is open, reset it
  useEffect(() => {
    handleFormReset();
  }, [isOpen, handleFormReset]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegisterSubmit(values.email, values.password, values.name);
  }

  return (
    <PopupWithForm
      name="sign up"
      title="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-overlay">
        <label className="popup__input-label" htmlFor="email-input">
          Email
        </label>
        <input
          className="popup__input"
          type="email"
          id="register-email"
          autoComplete="off"
          placeholder="Enter email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        <p className="popup__error" id="input-email-error">
          {errors.email || ""}
        </p>
      </div>

      <div className="popup__input-overlay">
        <label className="popup__input-label" htmlFor="password-input">
          Password
        </label>
        <input
          className="popup__input"
          type="password"
          id={`password-register`}
          autoComplete="on"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
          value={values.password || ""}
          minLength="8"
          maxLength="30"
          required
        />
        <p className="popup__error" id="input-password-error">
          {errors.password || ""}
        </p>
      </div>

      <div className="popup__input-overlay">
        <label className="popup__input-label" htmlFor="username-input">
          Username
        </label>
        <input
          className="popup__input"
          type="name"
          id="username-register"
          autoComplete="on"
          placeholder="Enter username"
          name="name"
          value={values.name || ""}
          onChange={handleChange}
          minLength="2"
          maxLength="30"
          required
        />
        <p className="popup__error" id="input-password-error">
          {errors.name || ""}
        </p>
      </div>

      {hasError && (
        <p className="popup__error popup__error_type_form">
          This email is unavailable
        </p>
      )}

      <button
        className={`popup__submit-button ${
          isValid ? "popup__submit-button_active" : ""
        }`}
        type="submit"
        aria-label="Sign up"
        disabled={!isValid}
      >
        Sign up
      </button>
      <p className="popup__signin-register">
        or{" "}
        <span className="popup__link" onClick={onSignInClick}>
          Sign in
        </span>
      </p>
    </PopupWithForm>
  );
};

export default Register;
