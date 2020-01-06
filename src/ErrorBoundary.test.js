import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import ReactDOM from 'react-dom';
import {  mount } from 'enzyme'

describe('<ErrorBoundary />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorBoundary>{'Test Code'}</ErrorBoundary>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  
  it('renders without crashing using a true state', () => {
    const wrapper = mount(<ErrorBoundary>{'Test Code'}</ErrorBoundary>);
    wrapper.setState({hasError: true});
  });
});