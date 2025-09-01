import { useEffect, useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { NUMBER_CARDS } from "../../utils/constants";

const NewsCardList = ({
  onSavedArticlesPage,
  loggedIn,
  cards,
  savedArticles,
  showCards,
  setShowCards,
  onSaveArticleClick,
  onRemoveArticleClick,
  savedCardsArray,
  setSavedCardsArray,
  onSignInClick,
}) => {
  const [next, setNext] = useState(3);
  const [isButtonHidden, setIsButtonHidden] = useState(false);

  /* It starts with 3 new cards (on saved article page, 
    it will show all cards) */
  useEffect(() => {
    if (!onSavedArticlesPage) {
      setShowCards(cards?.slice(0, 3));
    }
  }, [cards, onSavedArticlesPage, setShowCards]);

  useEffect(() => {
    if (onSavedArticlesPage) {
      setSavedCardsArray(savedArticles);
    }
  }, [onSavedArticlesPage, savedArticles, setSavedCardsArray]);

  /* Shows only the button show more, while the number of 
  cards are shown is smaller than the total */
  useEffect(() => {
    if (showCards?.length < cards?.length) {
      setIsButtonHidden(false);
    } else {
      setIsButtonHidden(true);
    }
  }, [showCards?.length, cards?.length]);

  /* On every each click, adds 3 cards to the variable 'next' 
  and increases the value by 3 */
  function handleShowMoreCards() {
    setShowCards(cards.slice(0, next + NUMBER_CARDS));
    setNext(next + NUMBER_CARDS);
  }

  return onSavedArticlesPage ? (
    <section className="news-card-list news-card-list_saved-articles">
      <div className="news-card-list__overlay">
        <ul className="news-card-list__card-grid news-card-list__card-grid_saved-articles">
          {savedCardsArray?.map((newscard) => (
            <li className="news-card-list__card" key={newscard._id}>
              <NewsCard
                data={newscard}
                onSavedArticlesPage={onSavedArticlesPage}
                loggedIn={loggedIn}
                onRemoveArticleClick={onRemoveArticleClick}
                savedArticles={savedArticles}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  ) : (
    <section className="news-card-list">
      <div className="news-card-list__overlay">
        <h3 className="news-card-list__title">Search results</h3>
        <ul className="news-card-list__card-grid">
          {showCards?.map((newscard, index) => (
            <li className="news-card-list__card" key={index}>
              <NewsCard
                data={newscard}
                onSavedArticlesPage={onSavedArticlesPage}
                loggedIn={loggedIn}
                onSaveArticleClick={onSaveArticleClick}
                onRemoveArticleClick={onRemoveArticleClick}
                savedArticles={savedArticles}
                onSignInClick={onSignInClick}
              />
            </li>
          ))}
        </ul>
        {!onSavedArticlesPage && !isButtonHidden && (
          <button
            className={`news-card-list__show-more-button`}
            onClick={handleShowMoreCards}
          >
            Show more
          </button>
        )}
      </div>
    </section>
  );
};

export default NewsCardList;
