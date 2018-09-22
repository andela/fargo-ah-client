import axios from 'axios';
import GET_ALL_TAGS from '../constants/tags';
import { CREATE_ARTICLE } from '../constants/articles';
import api from '../api';


export const createArticle = articleData => ({
  type: CREATE_ARTICLE,
  payload: articleData,
});

export const getTags = tagData => ({
  type: GET_ALL_TAGS,
  payload: tagData,
});

export const getAllTags = () => dispatch => api.get('/api/tags').then((res) => {
  dispatch(getTags(res.data));
});

const newArticle = articleDetails => (dispatch) => {
  const { image, article } = articleDetails;
  const formData = new FormData();
  formData.append('file', image);
  formData.append('data', JSON.stringify({ article }));
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('authorsHaven-token')}`;
  return api.post('/api/articles', formData).then(res => dispatch(createArticle(res.data)));
};

export default newArticle;
