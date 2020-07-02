import React from 'react';
import { shallow, mount } from 'enzyme';
import Counter from './Counter';
import App from './App';

describe('Counter Testing', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('render the title of the counter', () => {
    expect(wrapper.find('h1').text()).toContain("This is the counter app");
  });

  test('test a button with the text of "increment"', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  });

  test('render the initial value of state in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

  test('render the click event of the increment button and counter value', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
  });

  test('render the click event of the decrement button and counter value', () => {
    expect(wrapper.find('#decrement-btn').text()).toBe("Decrement");
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

});

