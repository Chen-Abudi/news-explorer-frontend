const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
console.log("API_KEY:", API_KEY);
const PROXY_URL = "https://nomoreparties.co/news/v2/everything";
const NUMBER_CARDS = 3;
const NUMBER_ARTICLES = 100;

const BASE_URL = "https://news-explorer-api-mu.vercel.app";

module.exports = {
  API_KEY,
  PROXY_URL,
  NUMBER_CARDS,
  NUMBER_ARTICLES,
  BASE_URL,
};
