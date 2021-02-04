const API_KEY = "c9e579a31e5741049e20e6438b7b3291";
const API_URL = `http://newsapi.org/v2/everything?apikey=${API_KEY}`;

const getArticles = search => {
  return fetch(API_URL + "&q=" + search)
    .then(res => res.json())
    .then(json => json.articles);
};

export {
  getArticles
};
