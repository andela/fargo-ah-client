import sinon from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';
import AuthorsHavenDetails from '../__mocks__/mockData';


describe('Button component rendering', () => {
  it('Should render the component properly', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Button text={AuthorsHavenDetails.text} onClick={onButtonClick} />);
    wrapper.find('Button').simulate('click');
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    expect(AuthorsHavenDetails).toHaveProperty('text');
    expect(onButtonClick).toHaveProperty('callCount', 1);
  });
});
