import { DELETE_ARTICLE } from '../constants/articles';


const removeArticle = articleSlug => ({
  type: DELETE_ARTICLE,
  payload: articleSlug,
});

export default removeArticle;
