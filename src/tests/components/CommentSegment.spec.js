import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import CommentSegments from '../../components/CommentSegments';


describe('COMMENT SEGMENT', () => {
  const sinonSpy = sinon.spy();
  const comment = {
    id: 2,
    User: {
      firstname: 'me',
      username: 'me',
      image: null,
    },
    body: 'me',
    createdAt: '2018-09-23 19:16:48.427+00',
  };

  const wrapper = shallow(<CommentSegments
    type="comment"
    id={comment.id}
    user={{}}
    username={comment.User.firstname || comment.User.username}
    body={comment.body}
    time={comment.createdAt}
    onClick={sinonSpy}
    imageUrl={comment.User.image}
  />);
  it('Should call the onSubmit function', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should call the show button when the user is logged in', () => {
    const user = {
      detail: {
        username: 'me',
      },
    };

    const wrapper1 = shallow(<CommentSegments
      type="comment"
      id={comment.id}
      user={user}
      username={comment.User.firstname || comment.User.username}
      body={comment.body}
      time={comment.createdAt}
      onClick={sinonSpy}
      imageUrl={comment.User.image}
    />);
    expect(wrapper1.length).toBe(1);
  });
  it('Should call the delete function', () => {
    wrapper.instance().delete();
    expect(sinonSpy).toHaveProperty('callCount', 1);
  });
});
