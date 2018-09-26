import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import getAllComments, { createComment, createReply, deleteComment } from '../../../redux/actions/commentActions';
import api from '../../../redux/api';
import actionTypes from '../../../redux/actions/actionTypes';

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

  const data = {
    success: 'string',
    comment: {
      id: 0,
      userId: 0,
      body: 'string',
      createdAt: 'string',
      updatedAt: 'string',
    },
    user: {
      success: true,
      user: {
        username: 'string',
        lastname: 'string',
        firstname: 'string',
        bio: 'string',
        image: 'string',
      },
    },
    article: {
      id: 0,
      slug: 'string',
      title: 'string',
      description: 'string',
      body: 'string',
      updatedCount: 'string',
      tagList: [
        'string',
      ],
      likesCount: 'string',
      imageUrl: 'string',
      createdAt: 'string',
      updatedAt: 'string',
      userId: 0,
    },
  };


  it('should successfully create a comment', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: data,
      });
    });

    const details = {
      comment: {
        body: 'bio',
      },
    };

    return store.dispatch(createComment(details)).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: actionTypes.CREATE_COMMENT,
        payload: data,
      });
    });
  });

  it('should successfully create a reply', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: data,
      });
    });

    const details = {
      comment: {
        body: 'bio',
      },
    };

    const id = 24;

    return store.dispatch(createReply(details, id)).then(() => {
      expect(store.getActions()[1]).toEqual({
        type: actionTypes.CREAT_REPLY,
        payload: data,
      });
    });
  });
  it('should successfully get all comments', async (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data,
      });
    });

    const slug = 'this-is-a-slug-for-testing';

    return store.dispatch(getAllComments(slug)).then(() => {
      expect(store.getActions()[2]).toEqual({
        type: actionTypes.GET_COMMENT,
        payload: data,
      });
      done();
    });
  });

  it('should successfully delete a comments', async (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
      });
    });

    const slug = 'this-is-a-slug-for-testing';
    const id = 24;


    return store.dispatch(deleteComment(slug, id)).then(() => {
      expect(store.getActions()[3]).toEqual({
        type: actionTypes.DELETE_COMMENT,
      });
      done();
    });
  });
});
