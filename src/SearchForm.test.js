import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SearchForm from './SearchForm'
import Loading from './Loading'

let categoriesList = [ 'test', 'data', 'here', 'okay'];

describe('<SearchForm />', () => {

  it('renders empty fine', () => {
    const wrapper = shallow(<SearchForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
    
  it('renders with categories in select', () => {
    const wrapper = shallow(<SearchForm categories={categoriesList} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('changing a select option calls the proper function', () => {
    const wrapper = shallow(<SearchForm categories={categoriesList} />)
    wrapper.find('select').at(0).simulate('change', {target: { value: 'testSelect'} })
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('changing the input calls the proper function', () => {
    const wrapper = shallow(<SearchForm categories={categoriesList} />)
    wrapper.find('input').at(0).simulate('change', {target: { value: 'testInput'} })
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('clicking submit submits the form', () => {
    const wrapper = shallow(<SearchForm categories={categoriesList} />)
    wrapper.find('button').at(0).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('submitting form calls proper function', () => {
    const wrapper = shallow(<SearchForm categories={categoriesList} apiCall={function() {}} />)
    wrapper.find('form').at(0).simulate('submit', { preventDefault: function() {}})
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

describe('<Loading />', () => {
  it('renders empty fine', () => {
    const wrapper = shallow(<Loading />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
});