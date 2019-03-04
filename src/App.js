import React, { Component } from 'react';
import './App.css';
import MovieRow from './components/MovieRow';
import $ from 'jquery';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      rows: ''
    }
    this.performSearch('marvel')
  }

  performSearch(searchTerm) {
    console.log('searching...working');
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=21aba28ec0ee62997a9be5608599a9a8&query=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results
        let movieRows = []

        results.forEach((movie) => {
          movie.poster_src = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })

        this.setState({
          rows: movieRows
        })


      },
      error: (xhr, status, err) => {
        console.log('failed')
      }
    })
  }

  searchChangeHandler = (event) => {
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
  }

  render() {
    return (
      <div className="App">
        <input
        style={{
          fontSize: 24,
          display: 'block',
          width: '100%',
          padding: '8px 16px 8px 16px'
        }}
          type="text"
          placeholder='Enter Film Name...'
          onChange = {this.searchChangeHandler}
        />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
