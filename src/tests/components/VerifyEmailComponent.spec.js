import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { VerifyEmailComponent } from '../../components/VerifyEmailComponent';

describe('Verify Email component testing', () => {
  const matchTokenTrue = {
    params: {
      token: 'hnjknjkjh',
    },
  };
  const matchTokenFalse = {
    params: {
      token: '',
    },
  };
  const currentUser = {
    detail: {
      username: '',
    },
  };
  const spy = sinon.spy();
  const history = {
    history: {
      push: spy,
    },
  };
  const location = {
    search: '?email=test@gmail.com',
  };
  const spyResolve = sinon.spy(() => Promise.resolve());
  const spyReject = sinon.spy(() => Promise.reject());
  it('Should render properly', () => {
    const wrapper = shallow(<VerifyEmailComponent match={matchTokenTrue} currentUser={currentUser} verifyEmailAction={spyResolve} resendEmailAction={() => ''} />);
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('FooterSlim').length).toEqual(1);
    expect(wrapper.find('h3').length).toEqual(1);
    wrapper.instance().reSendMail();
    wrapper.instance().redirect();
  });
  it('Should catch error in verifyEmailAction', () => {
    const wrapper = shallow(<VerifyEmailComponent match={matchTokenTrue} currentUser={currentUser} history={history} verifyEmailAction={spyReject} resendEmailAction={() => ''} />);
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('FooterSlim').length).toEqual(1);
    expect(wrapper.find('Link').length).toEqual(0);
    expect(wrapper.find('h3').length).toEqual(1);
    wrapper.instance().reSendMail();
  });
  it('Should update state when token is not provided', () => {
    const wrapper = shallow(<VerifyEmailComponent match={matchTokenFalse} location={location} currentUser={currentUser} history={history} verifyEmailAction={spyReject} resendEmailAction={() => ''} />);
    expect(wrapper.find('Link').length).toEqual(1);
    wrapper.find('Link').simulate('click');
    wrapper.instance().reSendMail();
  });
});
