import React from 'react';
import { shallow } from 'enzyme';
import ArticleMessage from '../../components/ArticleMessage';

describe('Horizontal Card component testing', () => {
  it('Should render properly', () => {
    const wrapper = shallow(<ArticleMessage firstText="something" secondText="something" path="/" />);
    expect(wrapper.find('#success').length).toEqual(1);

    expect(wrapper.find('Header').parent().is('div')).toEqual(true);
    expect(wrapper.length).toBe(1);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('div').length).toEqual(2);
  });
});
