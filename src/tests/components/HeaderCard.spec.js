import React from 'react';
import { shallow } from 'enzyme';
import HeaderCard from '../../components/HeaderCard';
<<<<<<< HEAD
import { articles } from '../__mocks__/mockData';
=======
import articles from '../__mocks__/mockData';
>>>>>>> ft(HeaderCard): Create the header card components

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
});
