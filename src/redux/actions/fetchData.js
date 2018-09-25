import axios from 'axios';

import loadCategories from './loadCategories';
import loadedArticles from './loadedArticles';
import currentArticle from './currentArticle';
import removeArticle from './deleteArticleAction';

const fetchData = asyncData => dispatch => axios({
  method: asyncData.method,
  url: asyncData.url,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authorsHaven-token')}`,
  },
})
  .then((response) => {
    if (asyncData.type === 'articles') {
      dispatch(loadedArticles(response.data.articles));
    } else if (asyncData.type === 'currentArticle') {
      dispatch(currentArticle(response.data.article));
    } else if (asyncData.type === 'deleteArticle') {
      dispatch(removeArticle(response));
    } else {
      dispatch(loadCategories(response.data.categorieslist));
    }
  })
  .catch(err => err);


export default fetchData;
