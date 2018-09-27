import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../components/Card';
import { articles } from '../__mocks__/mockData';

describe('Horizontal Card component testing', () => {
  const article = articles.articles.slice(0, 1);
  it('Should render properly', () => {
    const wrapper = shallow(<Card articles={article} />);
    expect(wrapper.find('Card').length).toEqual(1);
    expect(wrapper.find('CardContent').length).toEqual(1);
    expect(wrapper.find('CardDescription').length).toEqual(1);
    expect(wrapper.find('Link').length).toEqual(2);
    expect(wrapper.find('Image').length).toEqual(2);
  });
  it('Should render the correct text in card', () => {
    const wrapper = shallow(<Card articles={article} />);
    expect(wrapper.find('CardHeader Link').get(0).props.children).toEqual('imagine dragon is a human being an...');
    expect(wrapper.find('CardDescription Link').get(0).props.children[1]).toEqual('Veeqtor');
    expect(wrapper.find('CardMeta').get(0).props.children[0]).toEqual('tech');
  });
});
