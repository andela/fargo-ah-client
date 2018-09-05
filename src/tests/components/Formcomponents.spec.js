import React from 'react';
import { shallow } from 'enzyme';
import FormComponents from '../../components/FormComponents';

describe(' LoginModal component rendering', () => {
  const wrapper = shallow(<FormComponents />);
  it('Should render properly', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
