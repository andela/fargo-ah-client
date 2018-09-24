import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { EditProfile } from '../../views/EditProfile';

describe('Edit profile component test', () => {
  const currentUser = {
    detail: {
      username: '',
    },
  };
  const location = {
    pathname: '',
  };
  const err = { response: { data: { errors: { error: ['Username is not defined'] } } } };
  const spyResolve = sinon.spy(() => Promise.resolve());
  const spyReject = sinon.spy(() => Promise.reject(err));
  const file = new File(['any file name'], 'fargo.png', { type: 'image/png' });
  const e = {
    target: { files: [file] },
  };
  it('Should render edit profile component properly', () => {
    const wrapper = shallow(<EditProfile currentUser={currentUser} location={location} />);
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('Button').length).toEqual(2);
    expect(wrapper.find('Image').length).toEqual(1);
    wrapper.instance().onImageChange(e);
  });
  it('Should call the submit button on form click', () => {
    const wrapper = shallow(<EditProfile
      currentUser={currentUser}
      location={location}
      editProfileAction={spyResolve}
    />);
    wrapper.instance().onChange(e);
    wrapper.instance().fileRef(e);
    const componentDidMount = wrapper.instance().componentDidMount();
    componentDidMount.onloadend();
    wrapper.find('Form').simulate('submit');
    expect(spyResolve.callCount).toBe(1);
  });
  it('Should catch error in editAction', () => {
    const wrapper = shallow(<EditProfile
      currentUser={currentUser}
      location={location}
      editProfileAction={spyReject}
    />);
    wrapper.instance().onSubmit(e);
    wrapper.instance().openImageDialog();
    expect(spyReject.callCount).toBe(1);
  });
});
