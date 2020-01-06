import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders empty fine', () => {
    const wrapper = shallow(<BrowserRouter><App /></BrowserRouter>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

});