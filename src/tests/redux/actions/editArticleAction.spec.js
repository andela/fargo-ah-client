import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import updateArticle, { getAllTags } from '../../../redux/actions/editArticleAction';
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

  const articleData = {
    author:
    {
      bio: 'bio',
      email: 'email',
      firstname: 'firstname',
      image: 'image',
      isVerified: 'isVerified',
      lastname: 'lastname',
      username: 'username',
    },
    body: 'body',
    categorylist: ['science', 'politics'],
    description: 'This id from fargo',
    imageData: 'imageUrl',
    isPaidFor: false,
    price: 0.28,
    readTime: 234,
    tagList: ['tags', 'politics'],
    title: 'title',
  };

  const tagData = {
    tags: ['reactjs', 'angularjs', 'artificial intelligence', 'ai', 'artificial', 'intelligence', 'demo'],
  };

  it('should successfully create article', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: articleData,
      });
    });

    const details = {
      clearImagePath: 'path',
      image: 'image',
      article: {
        title: 'title',
        description: 'This id from fargo',
        body: 'body',
        tagList: [],
        imageData: 'imageUrl',
        categorylist: ['science', 'politics'],
        isPaidFor: false,
        price: 0.28,
        readTime: 234,
      },
      loading: false,
      errors: {},
    };

    const expected = {
      author:
    {
      bio: 'bio',
      email: 'email',
      firstname: 'firstname',
      image: 'image',
      isVerified: 'isVerified',
      lastname: 'lastname',
      username: 'username',
    },
      body: 'body',
      categorylist: ['science', 'politics'],
      description: 'This id from fargo',
      imageData: 'imageUrl',
      isPaidFor: false,
      price: 0.28,
      readTime: 234,
      tagList: ['tags', 'politics'],
      title: 'title',
    };

    return store.dispatch(updateArticle(details)).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: 'EDIT_ARTICLE',
        payload: expected,
      });
    });
  });
  it('should successfully get tags', async (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: tagData,
      });
    });

    const expected = {
      tags: ['reactjs', 'angularjs', 'artificial intelligence', 'ai', 'artificial', 'intelligence', 'demo'],
    };

    return store.dispatch(getAllTags()).then(() => {
      expect(store.getActions()[1]).toEqual({
        type: 'GET_ALL_TAGS',
        payload: expected,
      });
      done();
    });
  });
});
