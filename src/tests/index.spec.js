import React from 'react';
import { shallow } from 'enzyme';
import Route from '../router/index';

describe('Route component rendering', () => {
  it('Should render properly', () => {
    const wrapper = shallow(<Route />);
    expect(wrapper.length).toBe(1);
  });
});
