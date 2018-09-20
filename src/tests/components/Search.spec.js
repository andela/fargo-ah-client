import React from 'react';
import { shallow } from 'enzyme';
import { Loader } from 'semantic-ui-react';
import { Search } from '../../views/Search';
import { articleresponse, myarticles } from '../__mocks__/mockData';

describe(' Should render the Search Component', () => {
  const stateArticle = {
    loading: false,
  };
  const stateArticle3 = {
    loading: true,
    article: myarticles,
    totalPages: 2,
  };

  it('should render the SearchCard component', () => {
    const wrapper = shallow(<Search stateArticle={stateArticle} articleData={articleresponse} />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('SelectListControl').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(18);
  });

  it('Should display the loader when loading', () => {
    const wrapper = shallow(<Search stateArticle={stateArticle3} />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(Loader).length).toEqual(1);
  });
});
