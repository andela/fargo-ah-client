import React from 'react';
import { shallow } from 'enzyme';
import VerticalGroupCard from '../../components/verticalGroupCard';
import VerticalCard from '../../components/verticalCard';
import { articles } from '../__mocks__/mockData';

describe('Vertical Card component testing', () => {
  const article = articles.articles[0];
  it('Should render a vertical card', () => {
    const wrapper = shallow(<VerticalCard article={article} />);
    expect(wrapper.find('Card').length).toEqual(1);
    expect(wrapper.find('CardContent').length).toEqual(1);
    expect(wrapper.find('CardDescription').length).toEqual(1);
    expect(wrapper.find('Link').length).toEqual(2);
    expect(wrapper.find('Image').length).toEqual(2);
  });
  it('Should render the correct text in card', () => {
    const wrapper = shallow(<VerticalCard article={article} />);
    expect(wrapper.find('CardHeader Link').get(0).props.children).toEqual('imagine dragon');
    expect(wrapper.find('CardDescription Link').get(0).props.children[1]).toEqual('Veeqtor');
    expect(wrapper.find('CardMeta').get(0).props.children).toEqual('Tech');
  });
  it('Should render a group of vertical cards', () => {
    const wrapper = shallow(<VerticalGroupCard articles={articles.articles} />);
    expect(wrapper.find('VerticalCard').length).toEqual(4);
    expect(wrapper.find('VerticalCard').get(0).props.article).toBeTruthy();
  });
});
