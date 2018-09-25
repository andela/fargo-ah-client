import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { EditArticle } from '../../views/EditArticle';
import { tags, options } from '../__mocks__/mockData';


describe('Testing the create article component', () => {
  const spy = sinon.spy();
  const resolvePromiseSpy = sinon.spy(() => Promise.resolve());
  const props = {
    getTags: () => {},
    creatNewArticle: () => {},
    tags: ['', ''],
    article: {
      title: '',
      description: 'This id from fargo',
      body: '',
      tagList: [],
      imageData: '',
      categorylist: [],
      isPaidFor: false,
      price: 0.28,
      readTime: 234,
    },
  };
  const reduxStore = {
    clearImagePath: '',
    image: '',
    article: {
      title: ' ',
      description: 'This id from fargo',
      body: '',
      tagList: [],
      imageData: '',
      imageUrl: '',
      categorylist: [],
      isPaidFor: false,
      price: 0.28,
      readTime: 234,
    },
    loading: false,
    errors: {},
    currentPath: '',
  };
  const match = {
    params: {
      slug: 'slug',
    },
  };
  let wrapper = shallow(<EditArticle
    getTags={spy}
    updateArticle={resolvePromiseSpy}
    article={reduxStore}
    match={match}
  />);

  it('Should be able to render properly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should be able to convert tags to options', () => {
    const actual = wrapper.instance().tagToOptions(tags);
    const expected = [
      { value: 'Politics', label: 'Politics' },
      { value: 'Entertainment', label: 'Entertainment' },
      { value: 'Sports', label: 'Sports' },
    ];
    expect(actual).toEqual(expected);
  });
  it('Should be able to convert options to tags', () => {
    wrapper.instance().optionsToTag();
    const actual = wrapper.instance().optionsToTag(options);
    const expected = ['politics', 'entertainment', 'sports'];
    expect(actual).toEqual(expected);
  });
  it('Should handle submit method', () => {
    const actual = wrapper.instance().handleSubmit(match);
    expect(actual).toBeDefined();
  });
  it('Should handle title method', () => {
    const actual = wrapper.instance().handleTitle({ target: { value: 'title' } });
    expect(actual).toBe(true);
  });
  it('Should handle price method', () => {
    const actual = wrapper.instance().handlePrice({ target: { value: 'price' } });
    expect(actual).toBe(true);
  });
  it('Should handle radio button method when value is paid', () => {
    wrapper = shallow(<EditArticle {...props} article={reduxStore} />);
    const initialState = wrapper.state().article;
    const expected = wrapper.setState({ ...initialState, isPaidFor: true });
    const actual = wrapper.instance().handleRadioButtonChange({ target: { value: 'paid' } });
    expect(actual).toBe(expected);
  });
  it('Should handle radio button method when value is not paid', () => {
    wrapper = shallow(<EditArticle {...props} article={reduxStore} />);
    const initialState = wrapper.state().article;
    const expected = wrapper.setState({ ...initialState, isPaidFor: false });
    const actual = wrapper.instance().handleRadioButtonChange({ target: { value: 'premium' } });
    expect(actual).toBe(expected);
  });
  it('Should handle category change method', () => {
    wrapper = shallow(<EditArticle {...props} article={reduxStore} />);
    const actual = wrapper.instance().handleCategoryChange();
    expect(actual).toBe(true);
  });
  it('Should handle tag change method', () => {
    wrapper = shallow(<EditArticle {...props} article={reduxStore} />);
    const actual = wrapper.instance().handleTagChange();
    expect(actual).toBe(true);
  });
  it('Should handle image change method', () => {
    wrapper = shallow(<EditArticle {...props} article={reduxStore} />);
    const file = new File(['any file name'], 'fargo.png', { type: 'image/png' });
    const actual = wrapper.instance().handleImageData({ target: { files: [file] } });
    expect(actual).toBe(true);
  });
  it('Should handle body method', () => {
    wrapper = shallow(<EditArticle {...props} article={reduxStore} />);
    const initialState = wrapper.state().article;
    const expected = wrapper.setState({ ...initialState, body: 'body' });
    const actual = wrapper.instance().handleBody({ target: { getContent: () => {} } });
    expect(actual).toBe(expected);
  });
});
