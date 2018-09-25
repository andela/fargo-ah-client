import axios from 'axios';

import loadCategories from './loadCategories';
import loadedArticles from './loadedArticles';
import currentArticle from './currentArticle';

const getArticle = request => dispatch => axios({
  method: 'get',
  url: request.url,
})
  .then((response) => {
    if (request.type === 'articles') {
      dispatch(loadedArticles(response.data.articles));
    } else if (request.type === 'currentArticle') {
      dispatch(currentArticle(response.data.article));
    } else {
      dispatch(loadCategories(response.data.categorieslist));
    }
  })
  .catch(err => err);

export default getArticle;
