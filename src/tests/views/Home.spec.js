import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Home, mapDispatchToProps } from '../../views/Home';

import loadedCategories from '../__mocks__/categoryData';
import { user, articles } from '../__mocks__/mockData';


describe('Home component rendering', () => {
  it('Should render the component properly', () => {
    const wrapper = shallow(<Home
      loadedCategories={loadedCategories.categorieslist}
      loadedArticles={articles.articles}
      currentUser={null}
      loadArticle={() => 'Yes'}
    />);
    expect(wrapper.length).toBe(1);
  });

  it('Should set state for mobile view', () => {
    const wrapper = shallow(<Home
      loadedCategories={loadedCategories.categorieslist}
      loadedArticles={articles.articles}
      currentUser={null}
      loadArticle={() => 'Yes'}
    />);
    wrapper.instance().updateCards();
    wrapper.update();
    expect(wrapper.state().horizontalPlain).toBe('');
    expect(wrapper.state().verticalCard).toBe('');
    expect(wrapper.state().sizeZero).toBe(1);
    expect(wrapper.state().sizeThree).toBe(1);
    expect(wrapper.state().tabletWidth).toBe(8);
  });

  it('Should set state for desktop view', () => {
    const wrapper = shallow(<Home
      loadedCategories={loadedCategories.categorieslist}
      loadedArticles={articles.articles}
      currentUser={null}
      loadArticle={() => 'Yes'}
      targetWindow={window}
      query="(max-width: 1024px)"
    />);
    wrapper.instance().updateCards();
    wrapper.update();
    expect(wrapper.state().horizontalPlain).toBe('');
    expect(wrapper.state().verticalCard).toBe('');
    expect(wrapper.state().sizeZero).toBe(1);
    expect(wrapper.state().sizeThree).toBe(1);
    expect(wrapper.state().tabletWidth).toBe(8);
  });

  it('Should test WillUnmount', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Home
      loadedCategories={loadedCategories.categorieslist}
      loadedArticles={articles.articles}
      currentUser={null}
      loadArticle={() => 'Yes'}
    />);
    spy(wrapper.instance().componentWillUnmount());
    wrapper.update();
    expect(spy).toHaveProperty('callCount', 1);
  });

  it('Should test with user', () => {
    const wrapper = shallow(<Home
      loadedCategories={loadedCategories.categorieslist}
      loadedArticles={articles.articles}
      currentUser={user}
      loadArticle={() => 'Yes'}
    />);
    expect(wrapper.length).toBe(1);
  });

  it('Map Dispatch To Props', () => {
    const dispatchSpy = sinon.spy();
    const { loadArticle } = mapDispatchToProps(dispatchSpy);
    loadArticle();
    expect(dispatchSpy.callCount).toBe(1);
  });
});
