import React, { useState } from 'react'

export default function SearchForm(props) {
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const changeCategory = (e) => {
    setCategory(e.target.value);
  }

  const changeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  }


  const submitForm = (e) => {
    e.preventDefault();
    props.apiCall(category,searchTerm);
  }

  return (
    <form id="search-form" name="search-form" onSubmit={(e) => { submitForm(e)}
    }>
      <label htmlFor="category-select">Category:</label>
      <select id="category-select" name="category-select" onChange={(e) => changeCategory(e)} required>
          <option value="">Select one of the following:</option>
          {Object.keys(props.categories).map(category => <option value={category} key={category}>{category}</option> )}
        </select>
      <label htmlFor="search-input">Search Term:</label>
      <input type="text" placeholder="skywalker..." onChange={(e) => changeSearchTerm(e)} required/>
      <button type="submit" value="search!" className="useButton">search!</button>
    </form>
  )
}