import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ResetSuccess from '../../views/ResetSuccess';

describe('RESET FORM', () => {
  const props = {
    errors: '',
    message: '',
  };

  const sinonSpy = sinon.spy();
  const data = 'password123';

  const wrapper = shallow(<ResetSuccess reSendMail={sinonSpy} {...props} />);
  it('Should call the resend Mail function', () => {
    wrapper.instance().reSendMail(data);
    expect(sinonSpy.calledWith()).toBe(false);
  });

  it('should render unconnected component properly', () => {
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('p').length).toBe(1);
  });
});
