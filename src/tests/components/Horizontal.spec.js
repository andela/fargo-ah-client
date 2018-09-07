import React from 'react';
import { shallow } from 'enzyme';
import HorizontalCard from '../../components/HorizontalCard';
import { articles } from '../__mocks__/mockData';

describe('Vertical Card component testing', () => {
  it('Should render properly', () => {
    const wrapper = shallow(<HorizontalCard articles={articles.articles} />);
    expect(wrapper.find('HorizontalCard').length).toEqual(1);
    expect(wrapper.find('HorizontalCard').dive().find('Card').length).toEqual(1);
    expect(wrapper.find('HorizontalCard').dive().find('CardContent').length).toEqual(1);
  });
  it('Should render the correct text in card', () => {
    const wrapper = shallow(<HorizontalCard articles={articles.articles} />);
    expect(wrapper.find('HorizontalCard').length).toEqual(1);
    expect(wrapper.find('HorizontalCard').dive().find('Card').length).toEqual(1);
    expect(wrapper.find('HorizontalCard').dive().find('CardHeader').length).toEqual(1);
    expect(wrapper.find('HorizontalCard').dive().find('CardHeader Link').get(0).props.children).toEqual('imagine dragon');
    expect(wrapper.find('HorizontalCard').dive().find('CardDescription Link').get(0).props.children[1]).toEqual('Veeqtor');
    expect(wrapper.find('HorizontalCard').dive().find('CardMeta').get(0).props.children[0]).toEqual('Tech');
  });
});
