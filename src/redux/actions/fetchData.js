import axios from 'axios';

import loadCategories from './loadCategories';
import loadedArticles from './loadedArticles';
import currentArticle from './currentArticle';
import loadedCategoryArticles from './loadedCategoryArticles';

const fetchData = asyncData => dispatch => axios({
  method: 'get',
  url: asyncData.url,
})
  .then((response) => {
    const { articles, categorieslist } = response.data;

    if (asyncData.type === 'articles') {
      dispatch(loadedArticles(articles));
    } else if (asyncData.type === 'categoryArticles') {
      const responseData = articles || [];
      dispatch(loadedCategoryArticles(responseData));
    } else if (asyncData.type === 'currentArticle') {
      dispatch(currentArticle(response.data.article));
    } else {
      dispatch(loadCategories(categorieslist));
    }
  })
  .catch(err => err);

export default fetchData;
