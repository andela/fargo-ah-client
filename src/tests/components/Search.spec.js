import React from 'react';
import { shallow } from 'enzyme';
import { Loader } from 'semantic-ui-react';
import { Search } from '../../views/Search';
import { articleresponse, myarticles } from '../__mocks__/mockData';

const componentState = {
  searchfield: '',
  criteria: 'category',
  article: [],
  pageSize: 10,
  pageNumber: 1,
  loading: false,
  searchWarning: false,
  activePage: 1,
  boundaryRange: 1,
  siblingRange: 1,
  showEllipsis: true,
  showFirstAndLastNav: true,
  showPreviousAndNextNav: true,
  totalPages: 1,
};
describe(' Should render the Search Component', () => {
  const props = {
    getArticlesByCriteria: () => {},
    stateArticle: {
      loading: true,
      articles: {
        articles: {
          rows: [myarticles,
          ],
        },
      },
    },
    activePage: 1,
    criteria: '',
  };
  const stateArticle = {
    loading: false,
  };
  const stateArticle3 = {
    loading: true,
    article: myarticles,
    totalPages: 2,
  };

  const stateArticle2 = {
    loading: true,
    article: myarticles,
    criteria: '',
  };

  const prevProps = {
    stateArticle: {
      loading: true,
      article: myarticles,
      criteria: '',
    },
  };

  it('should render the SearchCard component', () => {
    const wrapper = shallow(<Search stateArticle={stateArticle} articleData={articleresponse} />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('SelectListControl').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(19);
  });

  it('Should display the loader when loading', () => {
    const wrapper = shallow(<Search stateArticle={stateArticle2} />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(Loader).length).toEqual(1);
  });

  it('Should display the loader when loading', () => {
    const wrapper = shallow(<Search stateArticle={stateArticle3} />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(Loader).length).toEqual(1);
  });

  it('Should handle Pagination change', () => {
    const wrapper = shallow(<Search {...props} />);
    wrapper.setState(componentState);
    const e = {};
    const { activePage } = wrapper.state;
    expect(wrapper.instance().handlePaginationChange(e, { activePage })).toBe(true);
  });

  it('Should display pager', () => {
    const wrapper = shallow(<Search {...props} />);
    const updatedState = { ...componentState };
    updatedState.totalPages = 2;
    wrapper.setState(updatedState);
    const e = {};
    const { activePage } = wrapper.state;
    expect(wrapper.instance().handlePaginationChange(e, { activePage })).toBe(true);
  });

  it('Should handle submit', () => {
    const wrapper = shallow(<Search {...props} />);
    const e = {
      preventDefault: () => {},
    };
    expect(wrapper.instance().onSubmit(e)).toBe(true);
  });

  it('Should allow searchWarning return true when  criteria is not available', () => {
    const wrapper = shallow(<Search {...props} />);
    wrapper.setState({
      criteria: null || 0 || '',
      searchWarning: true,
    });
    const { onSubmit } = wrapper.instance();
    onSubmit({ preventDefault: () => {} });

    expect((wrapper.state().criteria)).toBe('');
    expect((wrapper.state().searchWarning)).toBe(true);
  });
  it('Should allow searchWarning return false when  criteria is available', () => {
    const wrapper = shallow(<Search {...props} />);
    wrapper.setState({
      criteria: 'author',
      searchWarning: false,
    });
    const { onSubmit } = wrapper.instance();
    onSubmit({ preventDefault: () => {} });

    expect((wrapper.state().criteria)).toBe('author');
    expect((wrapper.state().searchWarning)).toBe(false);
  });
  it('Should handle input', () => {
    const wrapper = shallow(<Search {...props} />);
    expect(wrapper.instance().onInputChange({ target: { value: 'name' } })).toBe(true);
  });

  it('Should handle input', () => {
    const wrapper = shallow(<Search {...props} />);
    wrapper.update();
    expect(wrapper.instance().onInputChange({ target: { value: 'name' } })).toBe(true);
  });

  it('Should handle handleComponentState', () => {
    const wrapper = shallow(<Search {...props} />);
    const e = {
      preventDefault: () => {},
    };
    expect(wrapper.instance().handleComponentState(e)).toBe(true);
  });

  it('Should call the on didupdate function and set the state', () => {
    const wrapper = shallow(<Search {...props} />);
    wrapper.instance().componentDidUpdate(prevProps);
    const actual = wrapper.state().loading;
    wrapper.instance().handleComponentState();
    expect(actual).toBe(true);
  });
});
