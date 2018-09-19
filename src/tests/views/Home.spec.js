import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Home, mapDispatchToProps } from '../../views/Home';

import loadedCategories from '../__mocks__/categoryData';
import { user, articles } from '../__mocks__/mockData';

const history = {
  location: {
    pathname: 'root/tech',
  },
  push: jest.fn(),
};

describe('Home component rendering', () => {
  it('Should render the component properly', () => {
    const wrapper = shallow(<Home
      loadedCategories={loadedCategories.categorieslist}
      loadedArticles={articles.articles}
      currentUser={null}
      loadData={() => 'Yes'}
    />);
    expect(wrapper.length).toBe(1);
  });

  it('Should set state for mobile view', () => {
    const wrapper = shallow(<Home
      loadedCategories={loadedCategories.categorieslist}
      loadedArticles={articles.articles}
      currentUser={null}
      loadData={() => 'Yes'}
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
      loadData={() => 'Yes'}
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

  it('Should test with user', () => {
    const wrapper = shallow(<Home
      loadedCategories={loadedCategories.categorieslist}
      loadedArticles={articles.articles}
      currentUser={user}
      loadData={() => 'Yes'}
    />);
    expect(wrapper.length).toBe(1);
  });
  it('Should test handleMenuClick', () => {
    const wrapper = shallow(<Home
      loadedCategories={loadedCategories.categorieslist}
      loadedArticles={articles.articles}
      currentUser={user}
      loadData={() => 'Yes'}
      history={history}
    />);
    const instance = wrapper.instance();
    instance.handleMenuItemClick();
  });
  it('Map Dispatch To Props', () => {
    const dispatchSpy = sinon.spy();
    const { loadData } = mapDispatchToProps(dispatchSpy);
    loadData();
    expect(dispatchSpy.callCount).toBe(1);
  });
});
