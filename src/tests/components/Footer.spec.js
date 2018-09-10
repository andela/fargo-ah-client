import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe(' Component: Footer', () => {
  it('should render the footer component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.length).toBe(1);
  });

  it('should check for contents number of Link items', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('Link').length).toEqual(13);
  });

  it('should check for total number of category and special list items', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('Link.item').length).toEqual(10);
  });

  it('should check for 3 social icons', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('Link.socialicon').length).toEqual(3);
  });


  it('should check for contents of the category list', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('div').length).toEqual(12);
  });
});
