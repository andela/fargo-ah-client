import sinon from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/button';
import { text } from '../__mocks__/mockData';


describe('Button component rendering', () => {
  it('Should render the component properly', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Button text={text} onClick={onButtonClick} />);
    wrapper.find('Button').simulate('click');
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    expect(text).toBe('Engage');
    expect(onButtonClick).toHaveProperty('callCount', 1);
  });
});
