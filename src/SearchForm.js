import React, { Component } from 'react'

export default class SearchForm extends Component {
  state = {
    category: '',
    searchTerm: ''
  }

  changeCategory = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  changeSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }


  submitForm = (e) => {
    e.preventDefault();
    this.props.apiCall(this.state.category,this.state.searchTerm);
  }

  render() {

    let categories = this.props.categories || {};
    return (
      <form id="search-form" name="search-form" onSubmit={(e) => { this.submitForm(e)}
      }>
        <label htmlFor="category-select">Category:</label>
        <select id="category-select" name="category-select" onChange={(e) => this.changeCategory(e)} required>
            <option value="">Select one of the following:</option>
            {Object.keys(categories).map(category => <option value={category} key={category}>{category}</option> )}
          </select>
        <label htmlFor="search-input">Search Term:</label>
        <input type="text" placeholder="skywalker..." onChange={(e) => this.changeSearchTerm(e)} required/>
        <button type="submit" value="search!" className="useButton">search!</button>
      </form>
    )
  }
}