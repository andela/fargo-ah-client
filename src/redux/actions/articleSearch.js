import axios from 'axios';
import { GET_ARTICLE_SEARCH, ARTICLE_LOADING } from './types';


export const setSearchLoader = () => ({
  type: ARTICLE_LOADING,
});

export const getArticlesByCriteria = (
  searchCriteria,
  textToSearch,
  numberOfArticles,
  pageNumber,
) => (dispatch) => {
  dispatch(setSearchLoader());
  axios.get(`https://fargo-ah-staging.herokuapp.com/api/articles?${searchCriteria}=${textToSearch}&pageSize=${numberOfArticles}&pageNumber=${pageNumber}`)
    .then(res => dispatch({
      type: GET_ARTICLE_SEARCH,
      payload: res.data,
    }))
    .catch(error => dispatch({
      type: GET_ARTICLE_SEARCH,
      payload: {},
    }));
};
