import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ searchKeyword, setSearchKeyword, onSearch }) => {
  const [formInputValue, setFormInputValue] = useState("");
  const [placeholderText, setPlaceholderText] = useState("Enter topic");

  function handleChange(evt) {
    setSearchKeyword(evt.target.value);
    setFormInputValue(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!formInputValue) {
      setPlaceholderText("Please enter a keyword");
    } else {
      onSearch(searchKeyword);
    }
  }

  return (
    <section className="search-form">
      <div className="search-form__overlay">
        <h1 className="search-form__title">What's going on in the world?</h1>
        <p className="search-form__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form
          className="search-form__search-overlay"
          onSubmit={handleSubmit}
          noValidate
          name="submit"
        >
          <input
            className="search-form__input"
            placeholder={placeholderText}
            value={formInputValue}
            onChange={handleChange}
          ></input>
          <button className="search-form__button" type="submit">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
