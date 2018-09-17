import axios from 'axios';
import {
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_ERROR,
  CREATE_ARTICLE_LOADING,
  GET_ALL_TAGS,
} from './types';

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

export const getAllTags = () => (dispatch) => {
  axios.get(`${baseUrl}/tags`).then((res) => {
    dispatch({
      type: GET_ALL_TAGS,
      payload: res.data,
    });
  });
};

const newArticle = articleDetails => (dispatch) => {
  const { image, article } = articleDetails;
  const formData = new FormData();
  formData.append('file', image);
  formData.append('data', JSON.stringify({ article }));
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('authorsHaven-token')}`;
  return axios
    .post(`${baseUrl}/articles`, formData)
    .then(res => dispatch(createArticleSuccess(res.data)));
};

export default newArticle;
