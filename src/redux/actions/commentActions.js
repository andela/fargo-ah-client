import api from '../api';
import actionTypes from './actionTypes';

const getComments = payload => ({
  type: actionTypes.GET_COMMENT,
  payload,
});

const createCommentAction = payload => ({
  type: actionTypes.CREATE_COMMENT,
  payload,
});

const createReplyAction = payload => ({
  type: actionTypes.CREAT_REPLY,
  payload,
});

const deleteCommentAction = payload => ({
  type: actionTypes.DELETE_COMMENT,
  payload,
});

const getAllComments = slug => dispatch => api.get(`/api/articles/${slug}/comments`).then((res) => {
  dispatch(getComments(res.data));
});
const createComment = (slug, data) => dispatch => api.post(`/api/articles/${slug}/comments`, data)
  .then(res => dispatch(createCommentAction(res.data)));

const createReply = (slug, id, data) => dispatch => api.post(`/api/articles/${slug}/comments/${id}`, data)
  .then(res => dispatch(createReplyAction(res.data)));

const deleteComment = (slug, id) => dispatch => api.delete(`/api/articles/${slug}/comments/${id}`)
  .then(res => dispatch(deleteCommentAction(res.data)));

export default getAllComments;

export {
  createComment,
  createReply,
  deleteComment,
};
