import React from 'react';
import { shallow } from 'enzyme';
<<<<<<< HEAD
import Route from '../router';
=======
import Route from '../router/index';
>>>>>>> ch(testing): Setup testing environment

describe('Route component rendering', () => {
  it('Should render properly', () => {
    const wrapper = shallow(<Route />);
    expect(wrapper.length).toBe(1);
  });
});
