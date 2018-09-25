import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import deleteArticle from '../../../redux/actions/fetchData';

describe('delete article Action', () => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  const store = mockStore({
    deletedArticle: {
      articledeleted: false,
    },
  });

  const articleData = {
    message: 'message successfully created',

  };


  it('should successfully delete an article', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: articleData,
      });
    });

    const details = {
      url: '/api/articles/slug-title',
      type: 'deleteArticle',
      method: 'delete',
    };
    return store.dispatch(deleteArticle(details)).then(() => {
      expect(store.getActions()[0].type).toEqual('DELETE_ARTICLE');
      expect(store.getActions()[0].payload.data).toEqual({ message: 'message successfully created' });
    });
  });
});
