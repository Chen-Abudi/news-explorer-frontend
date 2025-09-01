import { BASE_URL } from "./constants";

class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _processResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`An error just occurred: ${res.status}`);
    }
  }

  _request(url, options) {
    return fetch(url, options).then(this._processResponse);
  }

  getCurrentUser(token) {
    return this._request(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  getArticles(token) {
    return this._request(`${this.baseUrl}/articles`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  saveArticle(data, searchKeyword, token) {
    // Grabbing most keys from data
    const {
      title,
      description: text,
      publishedAt: date,
      url: link,
      urlToImage: image,
    } = data;
    // Grabbing source from data object
    const source = data.source.name;
    // Grabbing keyword from the first letter that capitalized
    const keyword =
      searchKeyword.charAt(0).toUpperCase() + searchKeyword.slice(1);

    return this._request(`${this.baseUrl}/articles`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    });
  }

  removeArticle(id, token) {
    return this._request(`${this.baseUrl}/articles/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }
}

const mainApi = new Api({ baseUrl: BASE_URL });

export default mainApi;
