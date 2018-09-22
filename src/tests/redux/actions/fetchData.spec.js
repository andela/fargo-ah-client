import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import loadData from '../../../redux/actions/fetchData';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(axios);
describe('Async action for loading categories', () => {
  it('returns data when type is category', (done) => {
    const categoryRequest = {
      url: '/api/articles',
      type: 'category',
    };

    const data = {
      message: 'List of categories',
      categorieslist: ['Politics', 'Science', 'Sports', 'Culture', 'Education', 'Movies', 'Agriculture', 'Cartoon', 'Technology', 'Business', 'Entertainment'],
    };
    mock.onGet(categoryRequest.url).reply(200, data);

    const expectedActions = [
      {
        type: 'LOAD_CATEGORY',
        payload: data.categorieslist,
      },
    ];

    const store = mockStore({ loadedCategories: [] });

    return store.dispatch(loadData(categoryRequest)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});


describe('Async action for loading articles', () => {
  it('returns data when type is articles', (done) => {
    const articleRequest = {
      url: '/api/articles',
      type: 'articles',
    };

    const data = {
      articles: ['science', 'politics'],
    };

    mock.onGet(articleRequest.url).reply(200, data);

    const expectedActions = [
      {
        type: 'ARTICLES',
        payload: ['science', 'politics'],
      },
    ];

    const store = mockStore({ loadedArticles: [] });

    return store.dispatch(loadData(articleRequest)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});

describe('Async action to return error', () => {
  it('returns data when type is articles', (done) => {
    const badUrl = {
      url: '/api/articles/gatewaybad',
    };

    const data = {
      articles: [],
    };

    mock.onGet('/api/articles/gatewaybad').reply(404, data);


    const store = mockStore({ loadedArticles: [] });
    // console.log(store);

    return store.dispatch(loadData(badUrl)).then((response) => {
      // return of async actions
      expect(response.response.status).toEqual(404);
      expect(response.response.data.articles.length).toEqual(0);
      done();
    });
  });
});
