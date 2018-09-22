import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Article } from '../../views/CreateArticle';
import { tags, options } from '../__mocks__/mockData';


describe('Testing the create article component', () => {
  const spy = sinon.spy();
  const resolvePromiseSpy = sinon.spy(() => Promise.resolve());
  const wrapper = shallow(<Article getTags={spy} creatNewArticle={resolvePromiseSpy} />);

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

  it('Should call the submit method on submit', () => {
    wrapper.find('Form').simulate('submit');
    expect(resolvePromiseSpy).toHaveProperty('callCount', 1);
  });

  it('Should set the taglist state when tags are selected', () => {
    wrapper.find('StateManager#tag').simulate('change', options);
    const actual = wrapper.instance().state.article.tagList;
    const expected = ['politics', 'entertainment', 'sports'];
    expect(actual).toEqual(expected);
  });

  it('Should set the categoryList state when category are selected', () => {
    wrapper.find('StateManager#category').simulate('change', options);
    const actual = wrapper.instance().state.article.categorylist;
    const expected = ['politics', 'entertainment', 'sports'];
    expect(actual).toEqual(expected);
  });

  it('Should set the isPaidFor state when free checkbox is clicked', () => {
    wrapper.find('FormRadio#free').simulate('change', { target: { value: 'free', checked: true } });
    const actual = wrapper.instance().state.article.isPaidFor;
    expect(actual).toEqual(false);
  });

  it('Should set the isPaidFor state when premium checkbox is clicked', () => {
    wrapper.find('FormRadio#paid').simulate('change', { target: { value: 'paid', checked: true } });
    const actual = wrapper.instance().state.article.isPaidFor;
    expect(actual).toEqual(true);
  });

  it('Should set the price state when a price is entered', () => {
    wrapper.find('input#price').simulate('change', { target: { value: 2.5 } });
    const actual = wrapper.instance().state.article.price;
    expect(actual).toEqual(2.5);
  });

  it('Should set the title state when a title is entered', () => {
    wrapper.find('textarea#title').simulate('change', { target: { value: 'Testing Application' } });
    const actual = wrapper.instance().state.article.title;
    expect(actual).toEqual('Testing Application');
  });


  it('Should set the body state when the body is entered', () => {
    wrapper.find('Editor#body').simulate('change', {
      target: {
        getContent: () => '<p>Body</p>',
      },
    });
    const actual = wrapper.instance().state.article.body;
    expect(actual).toEqual('<p>Body</p>');
  });


  it('Should set the body state when the body is entered', () => {
    const file = new File(['any file name'], 'fargo.png', { type: 'image/png' });
    wrapper.find('input#image').simulate('change', { target: { files: [file] } });
  });
});
