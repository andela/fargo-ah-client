import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../../components/Header/NavComponent';

describe('NavCompnent rendering', () => {
  it('Should render the component properly', () => {
    const wrapper = shallow(<Nav text="Engage" class="Nav" />);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('Nav')).toHaveProperty('text');
  });
});
