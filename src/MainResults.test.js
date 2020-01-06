import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MainResults from './MainResults'


describe('<MainResults />', () => {

  let categoriesList = [ 'test', 'data', 'here', 'okay'];

  it('renders empty fine without props', () => {
    const wrapper = shallow(<MainResults />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders with all its props', () => {
  const wrapper = shallow(<MainResults results={categoriesList} clear={function() {}} category='catTest' searchTerm='searchTest' />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('clicking the clear button calls proper function', () => {
    const wrapper = shallow(<MainResults clear={function() {}} />)
    wrapper.find('button').at(0).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  });
});