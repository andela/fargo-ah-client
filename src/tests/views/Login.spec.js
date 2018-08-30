import React from 'react';
import { shallow } from 'enzyme';
<<<<<<< HEAD
import Login from '../../views/Login';
=======
import Login from '../../views/Home';
>>>>>>> ch(testing): Setup testing environment

describe('Login component rendering', () => {
  it('Should render the component properly', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.length).toBe(1);
<<<<<<< HEAD
    expect(wrapper.find('h1').text()).toBe('FARGO REACT APP - TEST LOGIN VIEW');
=======
>>>>>>> ch(testing): Setup testing environment
  });
});
