import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ResultsList from './ResultsList'

describe('<ResultsList />', () => {
  it('renders empty fine with no results', () => {
    const wrapper = shallow(<ResultsList />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders with results', () => {
    const wrapper = shallow(<ResultsList results={['okay','test','there']} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
});




