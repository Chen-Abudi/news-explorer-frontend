import "./SuccessfulPopup.css";

const SuccessfulPopup = (props) => {
  function handlePopupClick(evt) {
    if (evt.target.classList.contains("popup_receptive")) {
      props.onClose();
    }
  }

  return (
    <div
      className={`popup popup_type_successful ${
        props.isOpen ? "popup_receptive" : ""
      }`}
      onClick={handlePopupClick}
    >
      <div className="popup__overlay">
        <button
          className="popup__close-button popup__close-button_type_form"
          type="button"
          aria-label="Close popup"
          onClick={props.onClose}
        ></button>
        <div className="popup__form-overlay">
          <h2 className="popup__title">Registration successfully completed!</h2>
          <p className="popup__signin-link" onClick={props.onSignInClick}>
            Sign in
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulPopup;
