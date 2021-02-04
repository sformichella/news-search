const API_KEY = process.env.NEWS_API_KEY;
const API_URL = `http://newsapi.org/v2/everything?apikey=${API_KEY}`;

const getArticles = search => {
  return fetch(API_URL + "&q=" + search)
    .then(res => res.json())
    .then(json => json.articles);
};

export {
  getArticles
};
