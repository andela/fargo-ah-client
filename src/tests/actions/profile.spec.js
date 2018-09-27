import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import userArticles from '../../redux/actions/userArticles';
import profile from '../../redux/actions/profile';
import types from '../../redux/actions/actionTypes';
import api from '../../redux/api';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Resest password action', () => {
  const store = mockStore({});
  const {
    GET_PROFILE_FAILURE,
    GET_PROFILE_SUCCESS,
    GET_USER_ARTICLES_FAILURE,
    GET_USER_ARTICLES_SUCCESS,
  } = types;

  beforeEach(() => moxios.install(api));
  afterEach(() => moxios.uninstall(api));

  describe('user profile page', () => {
    it("should return user's profile", () => {
      const userProfile = {
        data: {
          success: true,
          user: {},
        },
      };

      const expectedActions = [
        {
          type: GET_PROFILE_SUCCESS,
          payload: { data: { success: true, user: {} } },
        },
      ];
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: userProfile,
        });
      });
      return store.dispatch(profile('nwanna')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should return error if user does not exist', () => {
      const userprofile = {
        error: {
          body: ['user does not exist'],
        },
      };
      const expectedAction = {
        type: GET_PROFILE_FAILURE,
        payload: {
          error: {
            body: ['user does not exist'],
          },
        },
      };

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404,
          response: userprofile,
        });
      });

      return store.dispatch(profile('Nnnenn2')).then(() => {
        expect(store.getActions()[1]).toEqual(expectedAction);
      });
    });
  });

  describe("get a single user/'s article", () => {
    it("should return a user's article", () => {
      const userResponse = {
        data: {
          articles: {},
          articlesCount: [],
        },
      };

      const expectedActions = {
        type: GET_USER_ARTICLES_SUCCESS,
        payload: {
          data: {
            articles: {},
            articlesCount: [],
          },
        },
      };


      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: userResponse,
        });
      });
      return store.dispatch(userArticles('Nwanna')).then(() => {
        expect(store.getActions()[2]).toEqual(expectedActions);
      });
    });

    it('should return an article if user does not exist', () => {
      const userResponse = {
        data: {
          success: false,
          errors: {
            body: ['user does not exist'],
          },
        },
      };
      const expectedAction = {
        type: GET_USER_ARTICLES_FAILURE,
        payload: {
          data: {
            success: false,
            errors: {
              body: ['user does not exist'],
            },
          },
        },
      };

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404,
          response: userResponse,
        });
      });

      return store.dispatch(userArticles('qwer1234')).then(() => {
        expect(store.getActions()[3]).toEqual(expectedAction);
      });
    });
  });
});
