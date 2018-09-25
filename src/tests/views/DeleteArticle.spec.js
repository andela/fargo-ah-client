import React from 'react';
import { shallow } from 'enzyme';
import ArticleDeleted from '../../views/ArticleDeleted';


describe('Home component rendering', () => {
  it('Should render the component properly', () => {
    const wrapper = shallow(<ArticleDeleted />);
    expect(wrapper.length).toBe(1);
  });
});
