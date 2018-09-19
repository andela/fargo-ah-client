import axios from 'axios';
import { CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_ERROR, CREATE_ARTICLE_LOADING } from './types';

const baseUrl = 'https://fargo-ah-staging.herokuapp.com/api';

export const createArticleSuccess = articleData => ({
  type: CREATE_ARTICLE_SUCCESS,
  payload: articleData,
});

export const createArticleError = errorData => ({
  type: CREATE_ARTICLE_ERROR,
  error: errorData,
});

export const createArticleLoading = () => ({
  type: CREATE_ARTICLE_LOADING,
});


const newArticle = (articleDetails, history) => (dispatch) => {
  dispatch(createArticleLoading(CREATE_ARTICLE_LOADING));
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return axios
    .post(`${baseUrl}/articles`, articleDetails)
    .then((res) => {
      dispatch(createArticleSuccess(res.data));
    })
    .catch((error) => {
      if (error.response.status === 401) {
        history.push('/');
      }
    });
};

export default newArticle;
