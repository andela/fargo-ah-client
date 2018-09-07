import React from 'react';
import { shallow } from 'enzyme';
import FooterSlim from '../../components/FooterSlim';

describe(' Component: Footer', () => {
  it('should render the footer component', () => {
    const wrapper = shallow(<FooterSlim />);
    expect(wrapper.length).toBe(1);
  });

  it('should check for total number of category and special list items', () => {
    const wrapper = shallow(<FooterSlim />);
    expect(wrapper.find('i.heart').length).toEqual(1);
  });

  it('should check for contents of the category list', () => {
    const wrapper = shallow(<FooterSlim />);
    expect(wrapper.find('div').length).toEqual(2);
  });
});
