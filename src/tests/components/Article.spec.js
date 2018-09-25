import React from 'react';
import { shallow } from 'enzyme';
import Article from '../../components/Article';
import { articles } from '../__mocks__/HomeMockData';

describe('Horizontal Card component testing', () => {
  it('Should render properly', () => {
    const errors = {
      body: ['this is an error'],
    };
    const wrapper = shallow(<Article articles={articles} errors={errors} />);
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('Grid').length).toEqual(3);
    expect(wrapper.find('Form').length).toEqual(1);
    expect(wrapper.find('Divider').length).toEqual(2);
    expect(wrapper.find('Editor').length).toEqual(1);
  });
});
