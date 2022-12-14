# Final Project at Practicum

# News Explorer Service App π°ππΊοΈ

## **Developed By Chen Abudi** π©βπ»β

## π’ Overview

- Intro
- Technologies & Techniques
- Live Project
- Additional Links
- Possible Improvements
- All Project Features

## π Intro

This is the Frontend of a News Explorer Service App, where users can search for news articles worldwide and save them to their own accounts. The app developed with React.

## π οΈ Technologies & Techniques

- ReactJS
- JavaScript
- CSS3
- React Router Dom
- Responsive Layout
- JWT server Auth
- newsapi.org - provides articles news
- Deployed to _GCP_ (Google Cloud Platform)

| NPM Packages (Backend)               |                                                                                                                                                                                                       Aspects of Use |
| :----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| bcryptjs                             |                                                                                                                                                                                                  Password Encryption |
| body-parser                          |                                                                                                                              Returns middlewares that handle incoming requests before they reach a target controller |
| celebrate                            |                                                                                                                                            It's an express middleware function that wraps the joi validation library |
| cors (Cross-Origin Resource Sharing) | It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain |
| dotenv                               |                                                                                                                              automatically loads environment variables from a .env file into the process .env object |
| express-winston                      |                                                                                                                                    Provides middlewares for request and error logging of your express.js application |
| winston                              |                                                                                                                                                       Universal logging library with support for multiple transports |
| validator                            |                                                                                                                                                                        A library of string validators and sanitizers |
| jsonwebtoken                         |                                                                                                                                   An open standard for securely transferring data within parties using a JSON object |
| express-rate-limit                   |                                                                                                                                Use to limit repeated requests to public APIs and/or endpoints such as password reset |
| helmet                               |                                                                                                                                                   Helps you secure your Express apps by setting various HTTP headers |

- NGINX - An open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more.

## API Endpoints :

| RESTful API Enpoints | HTTP Methods |                  Usage Purpose |
| -------------------- | :----------: | -----------------------------: |
| /signup              |     POST     |              User Registration |
| /signin              |     POST     |                     User Login |
| /users/me            |     GET      |              GETting user data |
| /articles            |     GET      | GETting data from all articles |
| /articles            |     POST     |         Creating a new article |
| /articles/:\_id      |    DELETE    |    DELETE an article by its id |

---

# _π©βπ»π¨βπ» How to Get Started_

### **Clone**

$ git clone https://github.com/Chen-Abudi/news-explorer-frontend.git

### **Install**

_$ cd news-explorer-frontend_

_$ npm i or npm install_

### **Launch**

_$ npm run start_

---

# π Deployed Application

## _Visit the App_ [&#128073;&#127997; **HERE !**](https://chen23-news-explorer.students.nomoredomainssbs.ru/) (Server IP 35.212.215.168)

---

## β¨ Valuable Links :

- ## [Backend API](https://api.chen23-news-explorer.students.nomoredomainssbs.ru/)

- ## [Backend Repo](https://github.com/Chen-Abudi/news-explorer-api)

---

## π§ Possible Improvements

- [ ] Create a Forgot Password option in case the users forget theirs.
- [ ] Resets Password
- [ ] Customize news outlet filtration according to user preferences.
- [ ] Customize the sorting of saved articles based on user preferences.
- [ ] Adjust the application for a dark/night mode.

---

## **Enjoy ! πΊππ½**
