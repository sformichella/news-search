const CORS = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "4281160a2a4540e598a5a0a53948cd28";
const API_URL = `http://newsapi.org/v2/everything?apikey=${API_KEY}`;

const getArticles = search => {
  return fetch(CORS + API_URL + "&q=" + search, { headers: { origin: null } })
    .then(res => res.json())
    .then(json => json.articles);
};

export {
  getArticles
};
