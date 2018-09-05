import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { ResetView, mapStateToProps } from '../../views/ResetPassword';

describe('RESET FORM', () => {
  const props = {
    resetPasswordAction: jest.fn(),
    errors: '',
    message: '',
  };

  const sinonSpy = sinon.spy();
  const data = 'password123';
  const resetReducer = {
    response: 'response',
  };

  const wrapper = shallow(<ResetView submit={sinonSpy} {...props} />);
  it('Should call the submit function', () => {
    wrapper.instance().submit(data);
    expect(sinonSpy.calledWith()).toBe(false);
  });

  it('Should call the map state to props function', () => {
    const user = mapStateToProps({ resetReducer });
    expect(user).toBe('response');
  });

  it('should render unconnected component properly', () => {
    expect(wrapper.find('div').length).toBe(1);
  });
});
