import React from 'react'
import GoldDivider from './GoldDivider'
import ResultsList from './ResultsList'
import './MainResults.css'
import './Button.css'
import ErrorBoundary from './ErrorBoundary'

export default function MainResults(props) {
  return (
    <section id="results">
      <h2>Your search results:</h2>
      <GoldDivider />
      <p><span className="resultItem">Category:</span> {props.category}</p>
      <p><span className="resultItem">Search Term:</span> {props.searchTerm}</p>
      <button type="button" onClick={props.clear} className="useButton">clear</button>
      <GoldDivider />
      <ErrorBoundary>
      <ResultsList results={props.results}/>
      </ErrorBoundary>
    </section>
  );
}