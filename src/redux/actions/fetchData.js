import axios from 'axios';

import loadCategories from './loadCategories';
import loadedArticles from './loadedArticles';

const fetchData = asyncData => dispatch => axios({
  method: 'get',
  url: asyncData.url,
})
  .then((response) => {
    if (asyncData.type === 'articles') {
      dispatch(loadedArticles(response.data.articles));
    } else {
      dispatch(loadCategories(response.data.categorieslist));
    }
  })
  .catch(err => err);


export default fetchData;
