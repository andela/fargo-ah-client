import React from 'react';
import { shallow } from 'enzyme';
import AuthNav from '../../components/Header/AuthNavComponent';

describe('AuthNavComponent rendering', () => {
  it('Should render the component properly', () => {
    const wrapper = shallow(<AuthNav />);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('AppButton').props().text).toBe('Home');
  });
});
