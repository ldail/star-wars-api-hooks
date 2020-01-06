import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MainSearch from './MainSearch'

let categoriesList = [ 'test', 'data', 'here', 'okay'];

describe('<MainSearch />', () => {

  it('renders empty fine', () => {
    const wrapper = shallow(<MainSearch />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
    
  it('renders with categories in select', () => {
    const wrapper = shallow(<MainSearch categories={categoriesList} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})