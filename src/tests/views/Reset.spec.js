import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { ResetView, mapStateToProps } from '../../views/Reset';

describe('RESET FORM', () => {
  const props = {
    resetReduxAction: jest.fn(),
    error: '',
    message: '',
  };

  const sinonSpy = sinon.spy();
  const data = 'email';
  const resetReducer = {
    user: 'user',
  };

  const wrapper = shallow(<ResetView submit={sinonSpy} {...props} />);
  it('Should call the submit function', () => {
    wrapper.instance().submit(data);
    expect(sinonSpy.calledWith()).toBe(false);
  });

  it('Should call the map state to props function', () => {
    const user = mapStateToProps({ resetReducer });
    expect(user).toBe('user');
  });

  it('should render unconnected component properly', () => {
    expect(wrapper.find('div').length).toBe(1);
  });
});
