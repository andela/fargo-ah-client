import React from 'react';
import { shallow } from 'enzyme';
import SelectListControl from '../../components/commons/SelectListControl';

const selectOptions = [

  { label: 'Search By', value: 0 },
  { label: 'Author', value: 'author' },
  { label: 'Category', value: 'category' },
  { label: 'Tag', value: 'tag' },
  { label: 'Title', value: 'title' },
];

describe('Tests for the articles search card', () => {
  it('should update the select input with the information', () => {
    const wrapper = shallow(<SelectListControl options={selectOptions} />);
    expect(wrapper.find('option').length).toEqual(5);
  });
});
