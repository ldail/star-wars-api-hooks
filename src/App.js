import React, {useState, useEffect} from 'react';
import './App.css';
import MainSearch from './MainSearch'
import MainResults from './MainResults'
import {Route, withRouter, Link} from 'react-router-dom'
import Loading from './Loading'
import ErrorBoundary from './ErrorBoundary'

function App(props) {
  const [rootCategories, setRootCategories] = useState({})
  const [results, setResults] = useState({});
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [hasError, setHasError] = useState(false);

  const clearResults = () => {
    setResults({});
    props.history.push('/');
  }

  const populateResults = (list,category,searchTerm) => {
    console.log(list);
    setResults(list);
    setCategory(category);
    setSearchTerm(searchTerm);
    props.history.push('/results');
  }

 const populateSelect = (rootList) => {
    setRootCategories(rootList);
  }


  const checkIfMore = (data, category, searchTerm, previousResults = []) => {
    if (data.count) {
      let newResults = [];
      data.results.forEach(result => {
        if (result.name) {
          newResults.push(result.name);
        }
        else if (result.title) {
          newResults.push(result.title);
        }
      });
      previousResults = [
        ...previousResults,
        ...newResults
      ];
      if (data.next) {
        callCategoryAPI(category,searchTerm, data.next, previousResults)
      }
      else {
        populateResults(previousResults,category,searchTerm);
      }
    }
    else {
      populateResults(previousResults,category,searchTerm);
    }
  }

  const callResultsFill = (category,searchTerm) => {
    props.history.push('/loading');
    callCategoryAPI(category,searchTerm)
  }

  const callCategoryAPI = (category,searchTerm,url,previousResults) => {
    if (!url) {
      url = `https://cors-anywhere.herokuapp.com/https://swapi.co/api/${category}/?search=${searchTerm}`
    }
    fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      else {
        throw new Error('200 status error');  
        }
      })
    .then(resJson => {
      console.log(resJson);
      checkIfMore(resJson, category, searchTerm, previousResults);
    })
    .catch(e => console.error(`There was an error ${e}`))
  }

  const callRootAPI = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/`)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('200 status error');
    })
    .then(resJson => populateSelect(resJson))
    .catch(e => console.error(`There was an error ${e}`))
  }

  useEffect(() => {
    callRootAPI(populateSelect);
  }, []);

  return (
    <div className="App">
      <header>
        <Link to='/'><h1>
          Star Wars
          <span>API Search</span>
        </h1></Link>
      </header>
      <main>
        <ErrorBoundary>
          <Route exact path = "/" render={() => 
              <MainSearch categories={rootCategories} apiCall={callResultsFill}/>}  
            />
          <Route path="/loading" component={Loading} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Route path ="/results" render={() => 
            <MainResults results={results} clear={clearResults} category={category} searchTerm={searchTerm}>
            </MainResults>} 
          />
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default withRouter(App);