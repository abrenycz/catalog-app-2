import React from 'react';
import {shallow} from 'enzyme';
import itemList from './itemList';

it('should render a list of products as an unordered list', () => {
  const mockItems = [
    {id: 1, name: 'Mock item 1'},
    {id: 2, name: 'Mock item 2'},

  ];
  const wrapper = shallow(<itemList items={mockItems}/>);
  expect(wrapper.find('li').length).toEqual(mockItems.length); // 2
});