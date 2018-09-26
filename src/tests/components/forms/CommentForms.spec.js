import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import CommentForm from '../../../components/forms/CommentForms';


describe('COMMENT FORM', () => {
  const props = {
    submit: jest.fn(),
  };
  const sinonSpy = sinon.spy(() => Promise.resolve('Commemd'));
  const event = {
    preventDefault() {},
    target: {
      name: 'body',
      value: 'come',
    },
  };

  const wrapper = shallow(<CommentForm
    disabled={false}
    commentId={2}
    type="Reply"
    btnText="Reply"
    size="tiny"
    position="right"
    handleSubmit={sinonSpy}
    {...props}
  />);
  it('Should call the onSubmit function', () => {
    wrapper.instance().submit(event);
    expect(sinonSpy).toHaveProperty('callCount', 1);
  });


  it('Should call the on submit function and set the state', () => {
    wrapper.instance().onChange(event);
    const actual = wrapper.state().comment.body;
    const expected = 'come';
    expect(actual).toBe(expected);
  });

  it('should call update state function', () => {
    wrapper.find('Form').simulate('submit', { preventDefault() {} });
    const actual = wrapper.instance().state.comment.body;
    const expected = 'come';
    expect(actual).toBe(expected);
  });
});
