import { useState, useEffect } from "react";
import "./NewsCard.css";

const NewsCard = ({
  data,
  onSavedArticlesPage,
  loggedIn,
  onSaveArticleClick,
  onRemoveArticleClick,
  savedArticles,
  onSignInClick,
}) => {
  const [isSaved, setIsSaved] = useState(false);

  /* Checks if the searched cards are saved by checking if the titles 
  are matching. If there is a match, then the state become isSaved 
  which turns into marked blue icon  */
  useEffect(() => {
    if (savedArticles) {
      setIsSaved(savedArticles.find((article) => article.title === data.title));
    }
  }, [data.title, savedArticles]);

  function handleSave(data) {
    if (isSaved) {
      onRemoveArticleClick(data);
    } else {
      onSaveArticleClick(data);
    }
    setIsSaved(!isSaved);
  }

  function convertDate() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let articleDate = onSavedArticlesPage ? data.date : data.publishedAt; // The original date is in ISOstring format
    let newDate = new Date(articleDate?.slice(0, 10));
    let convertedDate = `${
      months[newDate.getMonth()]
    } ${newDate.getDate()}, ${newDate.getFullYear()}`; // Converting the date to the correct format

    return convertedDate;
  }

  return onSavedArticlesPage ? (
    <article className="news-card">
      <button
        className="news-card__button news-card__button_remove"
        onClick={() => onRemoveArticleClick(data)}
      ></button>
      <div className="news-card__tag news-card__tag_type_tooltip">
        Remove from saved
      </div>
      <div className="news-card__tag news-card__tag_type_keyword">
        {data.keyword}
      </div>
      <a
        className="news-card__link"
        href={data.link}
        target="_blank"
        rel="noreferrer"
      >
        <img className="news-card__image" src={data.image} alt={data.title} />
        <div className="news-card__overlay">
          <p className="news-card__date">{convertDate()}</p>
          <h2 className="news-card__title">{data.title}</h2>
          <p className="news-card__description">{data.text}</p>
          <p className="news-card__source">{data.source}</p>
        </div>
      </a>
    </article>
  ) : (
    <article className="news-card">
      <button
        className={`news-card__button news-card__button_save ${
          loggedIn && isSaved ? "news-card__button_save_active" : ""
        }`}
        onClick={() => {
          if (loggedIn) {
            handleSave(data);
          } else {
            /* If the user is not logged in, then the sign in popup 
          will open when clicking to save */
            onSignInClick();
          }
        }}
      ></button>
      {!loggedIn && (
        <div className="news-card__tag news-card__tag_type_tooltip">
          Sign in to save articles
        </div>
      )}
      <a
        className="news-card__link"
        href={data.url}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="news-card__image"
          src={data.urlToImage}
          alt={data.title}
        />
      </a>
      <div className="news-card__overlay">
        <p className="news-card__date">{convertDate()}</p>
        <h2 className="news-card__title">{data.title}</h2>
        <p className="news-card__description">{data.description}</p>
        <p className="news-card__source">{data.source?.name}</p>
      </div>
    </article>
  );
};

export default NewsCard;
