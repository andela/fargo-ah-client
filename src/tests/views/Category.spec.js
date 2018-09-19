import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Category, mapDispatchToProps } from '../../views/Category';

import loadedCategories from '../__mocks__/categoryData';
import { user, articles } from '../__mocks__/mockData';

const match = {
  params: {
    title: 'tech',
  },
};

const history = {
  location: {
    pathname: 'root/tech',
  },
  push: jest.fn(),
};

const wrapper = shallow(<Category
  loadedCategories={loadedCategories.categorieslist}
  loadedCategoryArticles={articles.articles}
  currentUser={user}
  loadData={() => 'Yes'}
  match={match}
  history={history}
/>);

describe('Category component rendering', () => {
  it('Should render the component properly', () => {
    expect(wrapper.length).toBe(1);
  });
  it('Should test handleMenuClick', () => {
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
