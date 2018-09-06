import React from 'react';
import { shallow } from 'enzyme';
import MenubarItem from '../../components/MenubarItem';

describe('Test for MenubarItem', () => {
  const wrapper = shallow(<MenubarItem text="Science" />);

  it('Should have 1 div', () => {
    expect(wrapper.find(MenubarItem)).toHaveLength(0);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('.MenubarItem')).toHaveLength(1);
    expect(wrapper.find('div').hasClass('MenubarItem')).toEqual(true);
    expect(wrapper.text()).toEqual('Science');
    expect(wrapper.props().children).toEqual('Science');
  });
});
