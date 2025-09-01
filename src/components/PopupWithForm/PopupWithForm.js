import "./PopupWithForm.css";

const PopupWithForm = (props) => {
  function handlePopupClick(evt) {
    if (evt.target.classList.contains("popup_receptive")) {
      props.onClose();
    }
  }

  return (
    <div
      className={`popup popup_type_${props.name} ${
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
          <h2 className="popup__title">{props.title}</h2>
          <form
            className={`popup__form popup__form_type_${props.name}`}
            name={`form-${props.name}`}
            onSubmit={props.onSubmit}
            noValidate
          >
            {props.children}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupWithForm;
