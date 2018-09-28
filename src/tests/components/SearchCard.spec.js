import React from 'react';
import { shallow } from 'enzyme';
import Searchcard from '../../components/SearchCard';
import { articleresponse } from '../__mocks__/mockData';

describe(' Component should render', () => {
  it('should render the SearchCard component', () => {
    const wrapper = shallow(<Searchcard articles={articleresponse} />);
    expect(wrapper.length).toBe(1);
  });
});
