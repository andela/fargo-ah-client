import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../../views/Home';

import loadedCategories from '../__mocks__/categoryData';
import { articles } from '../__mocks__/mockData';

describe('Home component rendering', () => {
  it('Should render the component properly', () => {
    const wrapper = shallow(<Home
      loadedCategories={loadedCategories.categorieslist}
      loadedArticles={articles}
      currentUser={null}
      loadData={() => console.log('Yes')}
    />);
    // expect(wrapper.length).toBe(1);
  });
});
