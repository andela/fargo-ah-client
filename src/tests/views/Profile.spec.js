import React from 'react';
import { shallow } from 'enzyme';
import { ProfileView, mapStateToProps } from '../../views/Profile';

describe('Profile View', () => {
  const props = {
    profileAction: jest.fn(),
    userArticles: jest.fn(),
    detail: '',
    profile: {},
    history: {
      location: {
        pathname: '/profiles/Nwanna',
      },
    },
  };


  const currentUser = {
    user: 'userDetails',
  };
  const userProfile = {
    user: 'userProfile',
    articles: 'userArticles',
  };

  const profileReducer = {
    detail: {
      user: 'userDetails',
    },
    profile: {
      user: 'userProfile',
      articles: 'userArticles',
    },
  };

  const wrapper = shallow(<ProfileView {...props} />);


  it('Should call the map state to props function for a current user', () => {
    const userDetails = mapStateToProps({ currentUser, userProfile });
    expect(userDetails).toEqual(profileReducer);
  });

  it('should render unconnected component properly', () => {
    expect(wrapper.find('div').length).toBe(1);
  });
});
