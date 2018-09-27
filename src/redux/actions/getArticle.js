import axios from 'axios';

import loadCategories from './loadCategories';
import loadedArticles from './loadedArticles';
import currentArticle from './currentArticle';
import loadedCategoryArticles from './loadedCategoryArticles';


const getArticle = request => dispatch => axios({
  method: 'get',
  url: request.url,
})
  .then((response) => {
    const { articles, categorieslist } = response.data;
    if (request.type === 'articles') {
      dispatch(loadedArticles(response.data.articles));
    } else if (request.type === 'currentArticle') {
      dispatch(currentArticle(response.data.article));
    } else if (request.type === 'categoryArticles') {
      const responseData = articles || [];
      dispatch(loadedCategoryArticles(responseData));
    } else {
      dispatch(loadCategories(categorieslist));
    }
  })
  .catch(err => err);

export default getArticle;
