// import axios from 'axios';
import { DELETE_ARTICLE } from '../constants/articles';
// import api from '../api';


export const removeArticle = articleSlug => ({
  type: DELETE_ARTICLE,
  payload: articleSlug,
});

// const deleteArticle = (modifiedDetails, slug) => (dispatch) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('authorsHaven-token')}`;
//   return api.delete(`/api/articles/${slug}`, modifiedDetails).then(res => dispatch(removeArticle(res.data)));
// };

// export default deleteArticle;
