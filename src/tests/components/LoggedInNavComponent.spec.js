import React from 'react';
import { shallow } from 'enzyme';
import { user } from '../__mocks__/mockData';
import LoggedInNav from '../../components/Header/LoggedInNavComponent';

describe('LoggedInNavComponent rendering', () => {
  const history = {
    location: {
      pathname: '/',
    },
  };
  it('Should render notification bell properly', () => {
    const wrapper = shallow(<LoggedInNav user={user} text="Home" class="Nav" history={history} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('.notification').props().src).toBe('http://res.cloudinary.com/blackincode/image/upload/v1536159370/Vector_pw6m41.png');
    expect(wrapper.find('.notification').props().alt).toBe('Notifications');
  });
  it('Should render notification bell properly', () => {
    const wrapper = shallow(<LoggedInNav user={user} text="Home" class="Nav" history={history} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('.pen').props().src).toBe('https://res.cloudinary.com/blackincode/image/upload/v1536149768/fountain-pen-close-up_gfzl7b.svg');
    expect(wrapper.find('.pen').props().alt).toBe('Pen');
  });
});
