import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import loadData from '../../redux/actions/fetchData';

<<<<<<< HEAD
=======

>>>>>>> ft(homepage): homepage design & functionality
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
<<<<<<< HEAD
=======
      // return of async actions
>>>>>>> ft(homepage): homepage design & functionality
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
<<<<<<< HEAD
=======
      // return of async actions
>>>>>>> ft(homepage): homepage design & functionality
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});

<<<<<<< HEAD
describe('Async action for getting current article', () => {
  it('returns data when type is articles', (done) => {
    const articleRequest = {
      url: '/api/articles/slug-title',
      type: 'currentArticle',
    };

    const data = {
      article: {
        id: 2,
        slug: 'artificial-intelligence-how-do-to-do-it-so-everyone-can-be-able-to-see-cjm6ugy2u00010sz8uloipmro',
        title: 'Artificial intelligence it can be able to see.',
        description: 'Ever wonder how?',
      },
    };

    mock.onGet(articleRequest.url).reply(200, data);

    const store = mockStore({ currentArticle: {} });

    return store.dispatch(loadData(articleRequest)).then(() => {
      expect(store.getActions()[0].type).toEqual('SINGLE_ARTICLE');
      expect(store.getActions()[0].payload.id).toEqual(2);
      expect(store.getActions()[0].payload.title).toEqual('Artificial intelligence it can be able to see.');
      expect(store.getActions()[0].payload.description).toEqual('Ever wonder how?');
      done();
    });
  });
});

=======
>>>>>>> ft(homepage): homepage design & functionality
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
<<<<<<< HEAD

    return store.dispatch(loadData(badUrl)).then((response) => {
=======
    // console.log(store);

    return store.dispatch(loadData(badUrl)).then((response) => {
      // return of async actions
>>>>>>> ft(homepage): homepage design & functionality
      expect(response.response.status).toEqual(404);
      expect(response.response.data.articles.length).toEqual(0);
      done();
    });
  });
});
