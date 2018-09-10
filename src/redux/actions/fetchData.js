import axios from 'axios';

import loadCategories from './loadCategories';
import loadedArticles from './loadedArticles';
import mockCategoryData from '../../tests/__mocks__/categoryData';

const fetchData = asyncData => (dispatch) => {
  axios({
    method: 'get',
    url: asyncData.url,
  })
    .then((response) => {
      if (asyncData.type === 'articles') {
        dispatch(loadedArticles(response.data.articles));
      } else {
        console.log(mockCategoryData.categorieslist);
        dispatch(loadCategories(mockCategoryData.categorieslist));
      }
    })
    .catch(err => console.log(err));
};

export default fetchData;
