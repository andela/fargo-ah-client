import axios from 'axios';

import loadCategories from './loadCategories';
import loadedArticles from './loadedArticles';
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
    } else {
      dispatch(loadCategories(categorieslist));
    }
  })
  .catch(err => err);


export default fetchData;
