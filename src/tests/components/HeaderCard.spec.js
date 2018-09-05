import React from 'react';
import { shallow } from 'enzyme';
import HeaderCard from '../../components/HeaderCard';
import articles from '../__mocks__/mockData';

describe('Header Card component rendering', () => {
  it('Should render properly', () => {
    const wrapper = shallow(<HeaderCard articles={articles.articles} />);
    expect(wrapper.length).toBe(3);
    expect(articles).toHaveProperty('articles');
    expect(articles.articles[0]).toHaveProperty('slug');
    expect(articles.articles[0]).toHaveProperty('imageUrl');
    expect(articles.articles[0]).toHaveProperty('title');
    expect(articles.articles[0]).toHaveProperty('author');
    expect(articles.articles[0]).toHaveProperty('createdAt');
  });

  const article = articles.articles.slice(0, 1);
  it('Should one card render properly', () => {
    const wrapper = shallow(<HeaderCard articles={article} />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('Card').length).toEqual(1);
    expect(wrapper.find('CardContent').length).toEqual(2);
    expect(wrapper.find('CardDescription').length).toEqual(1);
    expect(wrapper.find('Link').length).toEqual(2);
    expect(wrapper.find('Image').length).toEqual(2);
  });
});
