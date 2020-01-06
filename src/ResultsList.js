import React from 'react'

export default function ResultsList(props) {

  function mapResults() {
    let results = props.results || [];
    let count = 0;

    if (!results[0]) {
      return <p id="noResults">No results!</p>
    } else {
      return results.map(result => {
          count++;
          return <li key={result}><span className="count">{count}.</span> {result}</li>;
    })
  }
}

  return(
    <ul>
      {mapResults()}
    </ul>
  );
}