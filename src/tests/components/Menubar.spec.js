import React from 'react';
import { shallow } from 'enzyme';
import Menubar from '../../components/Menubar';
import categoryData from '../__mocks__/categoryData';


describe('Test for Menubar', () => {
  const wrapper = shallow(<Menubar categorieslist={categoryData.categorieslist} />);

  it('Should have Menubar', () => {
    expect(wrapper.find(Menubar)).toHaveLength(0);
  });

  it('Should have 1 div element', () => {
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('.MenubarWrapper').exists()).toBe(true);
    expect(wrapper.find('div').children().length).toBe(1);
  });

  it('Should have 1 t element', () => {
    expect(wrapper.find('t').children().length).toBe(12);
    expect(wrapper.find('t').hasClass('Menubar')).toBe(true);
  });

  it('Should update activeItemIndex in state on calling changeActiveItem method', () => {
    // manually trigger the callback
    wrapper.instance().changeActiveItem(0);
    expect(wrapper.instance().state.activeItemIndex).toBe(0);
  });

  expect(wrapper.find('div').hasClass('MenubarWrapper')).toEqual(true);

  it('Should update numberOfCards when window with is 360', () => {
    window.innerWidth = 360;
    wrapper.instance().updateDimensions();
    expect(wrapper.instance().state.numberOfCards).toBe(3);
  });

  it('Should update numberOfCards when window with is 388', () => {
    window.innerWidth = 388;
    wrapper.instance().updateDimensions();
    expect(wrapper.instance().state.numberOfCards).toBe(3);
  });

  it('Should update numberOfCards when window with is 435', () => {
    window.innerWidth = 435;
    wrapper.instance().updateDimensions();
    expect(wrapper.instance().state.numberOfCards).toBe(4);
  });

  it('Should update numberOfCards when window with is 778', () => {
    window.innerWidth = 778;
    wrapper.instance().updateDimensions();
    expect(wrapper.instance().state.numberOfCards).toBe(6);
  });

  it('Should update numberOfCards when window with is 1034', () => {
    window.innerWidth = 1034;
    wrapper.instance().updateDimensions();
    expect(wrapper.instance().state.numberOfCards).toBe(7);
  });

  it('Should update numberOfCards when window with is more than 1450', () => {
    window.innerWidth = 1035;
    wrapper.instance().updateDimensions();
    expect(wrapper.instance().state.numberOfCards).toBe(9);
  });
});
