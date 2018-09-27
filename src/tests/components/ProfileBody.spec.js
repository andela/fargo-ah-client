import React from 'react';
import { shallow } from 'enzyme';
import ProfileBody from '../../components/ProfileBody';

describe(' Profile Body component rendering', () => {
  const state = {
    isUser: false,
    hasArticles: false,
    loading: true,
    horizontalPlain: window.screen.width < 769 ? '' : 'horizontal-plain',
    sizeThree: window.screen.width < 769 ? 1 : 3,
  };
  const data = {
    profile: {
      user: {
        user: {
          firstname: 'myFirstname',
          username: 'myUsername',
          bio: 'He is a jolly good fellow',
        },
      },
      articles: {
        articles: [{
          title: 'title',
          description: 'description',
          body: 'body',
          categorylist: ['politics'],
        }],
      },
    },
    data: {
      articlesCount: 2,
    },
  };

  const userArticles = () => {
    const promise = new Promise(resolve => resolve(data));
    state.hasArticles = true;
    return promise;
  };
  const props = {
    profileAction: jest.fn(),
    userArticles,
    detail: {
      detail: {
        username: 'Nwanna',
      },
    },
    profile: data.profile,
    history: '/profiles/Nwanna',
  };

  const wrapper = shallow(<ProfileBody {...props} {...state} />);

  it('should call component did mount if component mounts', () => {
    wrapper.setProps({ data: 'data' });
    wrapper.instance().updateArticles(true);
    wrapper.instance().componentDidMount();
  });
});
