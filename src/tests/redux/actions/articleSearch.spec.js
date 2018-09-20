import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { getArticlesByCriteria } from '../../../redux/actions/articleSearch';
import api from '../../../redux/api';

describe('create article Action', () => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  beforeEach(() => {
    moxios.install(api);
  });

  afterEach(() => {
    moxios.uninstall(api);
  });
  const store = mockStore({});

  it('should successfully dispatch the ARTICLE_LOADING action', async (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [],
      });
    });
    const expectedPayload = { type: 'ARTICLE_LOADING' };
    store.dispatch(getArticlesByCriteria('author', 'verona', 10, 1));
    const actions = store.getActions();
    expect(actions).toEqual([expectedPayload]);
    done();
  });

  it('should successfully dispatch the ARTICLE_LOADING action', async (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [],
      });
    });
    const expectedTypes = [{ type: 'GET_ARTICLE_SEARCH' }];
    store.dispatch(getArticlesByCriteria('author', 'verona', 10, 1));
    setTimeout(() => {
      expect(store.getActions()[0]).toEqual(expectedTypes);
      done();
    }, 2000);
    done();
  });
});
