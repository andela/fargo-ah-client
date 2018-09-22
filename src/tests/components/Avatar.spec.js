import React from 'react';
import { shallow } from 'enzyme';
import { Avatar } from '../../components/Avatar';
import { avatarUser } from '../__mocks__/mockData';

describe('Avatar component rendering', () => {
  it('Should render properly', () => {
    const wrapper = shallow(<Avatar user={avatarUser} />);
    expect(wrapper.length).toBe(1);
    expect(avatarUser).toHaveProperty('detail');
    expect(avatarUser.detail).toHaveProperty('email');
    expect(avatarUser.detail).toHaveProperty('username');
    expect(avatarUser.detail).toHaveProperty('bio');
    expect(avatarUser.detail).toHaveProperty('image');
  });

  it('Should return to the index route', () => {
    const history = {
      push: () => '/',
    };
    const wrapper = shallow(<Avatar
      user={avatarUser}
      userLogout={jest.fn(() => true)}
      history={history}
    />);
    const actual = wrapper.instance().logout();
    expect(actual).toEqual('/');
  });

  it('Should return null', () => {
    const history = {
      push: () => '/',
    };
    const wrapper = shallow(<Avatar
      user={avatarUser}
      userLogout={jest.fn(() => false)}
      history={history}
    />);
    const actual = wrapper.instance().logout();
    expect(actual).toEqual(null);
  });
});
