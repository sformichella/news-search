const CORS = "https://cors-anywhere.herokuapp.com/";
const API_URL = `http://newsapi.org/v2/everything?apikey=${API_KEY}`;
const API_KEY = "c9e579a31e5741049e20e6438b7b3291";

const getArticles = search => {
  return fetch(CORS + API_URL + "&q=" + search, { headers: { origin: null } })
    .then(res => res.json())
    .then(json => json.articles);
};

export {
  getArticles
};
