import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { UserComment, mapDispatchToProps, mapStateToProps } from '../../components/UserComment';


describe('LandingPage Component', () => {
  const spyResolve = sinon.spy(() => Promise.resolve({ success: true }));
  const spyReject = sinon.spy(() => Promise.reject());
  const spy = sinon.spy();
  const slug = 'this-is-atest-slug';
  const comments = {
    comments: [
      {
        id: 1,
        body: 'wenkgnmsdlkmnklglrg',
        createdAt: '2018-09-25T16:01:36.511Z',
        updatedAt: '2018-09-25T16:01:36.511Z',
        articleId: 2,
        userId: 2,
        User: {
          username: 'victosr',
          lastname: null,
          firstname: null,
          bio: null,
          isverified: false,
          image: null,
        },
        Replies: [
          {
            id: 1,
            body: 'onoewngongogrnogn',
            createdAt: '2018-09-25T16:01:36.511Z',
            updatedAt: '2018-09-25T16:01:36.511Z',
            commentId: 1,
            userId: 2,
            User: {
              username: 'victosr',
              isverified: false,
              image: null,
            },
          },
        ],
      },
    ],
  };
  const commentNoreply = {
    comments: [
      {
        id: 1,
        body: 'wenkgnmsdlkmnklglrg',
        createdAt: '2018-09-25T16:01:36.511Z',
        updatedAt: '2018-09-25T16:01:36.511Z',
        articleId: 2,
        userId: 2,
        User: {
          username: 'victosr',
          lastname: null,
          firstname: null,
          bio: null,
          isverified: false,
          image: 'nill',
        },
        Replies: [],
      },
    ],
  };

  const data = {
    comment: {
      body: 'body',
    },
  };
  const wrapper = shallow(<UserComment
    dispatchCreateComment={spyResolve}
    dispatchCreateReply={spyResolve}
    dispatchDeleteComment={spyResolve}
    getComments={spy}
    slug={slug}
    comments={comments}
  />);
  const wrapperReject = shallow(<UserComment
    dispatchCreateComment={spyReject}
    dispatchCreateReply={spyReject}
    dispatchDeleteComment={spyReject}
    getComments={spy}
    slug={slug}
    comments={comments}
  />);
  const wrapperNoReply = shallow(<UserComment
    dispatchCreateComment={spyReject}
    dispatchCreateReply={spyReject}
    dispatchDeleteComment={spyReject}
    getComments={spy}
    slug={slug}
    comments={commentNoreply}
  />);


  it('renders UserComment correctly', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapperNoReply.length).toBe(1);
  });

  it('should call the handleCommentSubmit function', () => {
    wrapper.instance().handleCommentSubmit(data);
    wrapperReject.instance().handleCommentSubmit(data);
  });

  it('should call the handleReplySubmit function', () => {
    wrapper.instance().handleReplySubmit(data, 2);
    wrapperReject.instance().handleReplySubmit(data, 2);
  });

  it('should call the handleCommentDelete function', () => {
    wrapper.instance().handleCommentDelete(2);
    wrapperReject.instance().handleCommentDelete(2);
  });

  it('Maps state To Props', () => {
    const storeState = mapStateToProps({
      currentUser: { username: 'me' },
    });
    const { currentUser } = storeState;
    expect(currentUser.username).toBe('me');
  });

  it('Maps Dispatch To Props', () => {
    const dispatchSpy = sinon.spy();
    const { getComments } = mapDispatchToProps(dispatchSpy);
    getComments();
    expect(dispatchSpy.callCount).toBe(1);
  });
});
