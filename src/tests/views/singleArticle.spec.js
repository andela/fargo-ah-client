import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { SingleArticle, mapDispatchToProps, mapStateToProps } from '../../views/SingleArticle';

describe('Test for SingleArticle Component', () => {
  const article = {
    slug: 'this-is-a-test-slug',
    title: 'gamer',
    body: 'gaming to naija',
    createdAt: '2018-09-17T22:11:45.415Z',
  };
  const match = {
    params: {
      slug: 'game-of-throne',
    },
  };
  let wrapper = shallow(<SingleArticle
    currentArticle={article}
    match={match}
    loadData={() => 'Yes'}
  />);
  it('Should render properly', () => {
    expect(typeof wrapper).toBe('object');
  });
  it('Should have article-view top class', () => {
    expect(wrapper.find('.article-view').exists()).toBe(true);
  });
  it('Should have article-title class', () => {
    expect(wrapper.find('.article-title').exists()).toBe(true);
  });
  it('Should have published-date-text class', () => {
    expect(wrapper.find('.published-date-text').exists()).toBe(true);
  });
  it('Should have image-width and article-image class', () => {
    expect(wrapper.find('.image-width').exists()).toBe(true);
    expect(wrapper.find('.article-image').exists()).toBe(true);
  });
  it('Should display author when article loads and it exists', () => {
    article.author = 'Lumex';
    wrapper = shallow(<SingleArticle
      currentArticle={article}
      match={match}
      loadData={() => 'Yes'}
    />);
    expect(wrapper.find('.menu-icon').exists()).toBe(true);
    expect(wrapper.find('.article-body').exists()).toBe(true);
  });
  it('Maps Dispatch To Props', () => {
    const dispatchSpy = sinon.spy();
    const { loadData, getArticleComments } = mapDispatchToProps(dispatchSpy);
    loadData();
    getArticleComments(article.slug);
    expect(dispatchSpy.callCount).toBe(2);
  });
  it('Maps state To Props', () => {
    const storeState = mapStateToProps({
      currentArticle: article,
      currentUser: {},
    });
    const { currentArticle } = storeState;
    expect(currentArticle.author).toBe('Lumex');
    expect(currentArticle.body).toBe('gaming to naija');
    expect(currentArticle.title).toBe('gamer');
  });

  it('should call update state function', () => {
    const dispatchSpy = sinon.spy();
    const article1 = {
      slug: 'this-is-a-test-slug-slug',
      title: 'gamer',
      body: 'gaming to naija',
      createdAt: '2018-09-17T22:11:45.415Z',
    };
    const prevProps = {
      currentArticle: article1,
    };
    wrapper = shallow(<SingleArticle
      currentArticle={article}
      getArticleComments={dispatchSpy}
      match={match}
      loadData={() => 'Yes'}
    />);
    wrapper.instance().componentDidUpdate(prevProps);
  });
});
