import React, { Component } from "react";
import { moviesData } from "../moviesData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/css/App.css";

import MovieList from "./MovieList/MovieList";
import MovieListWillWatch from "./MovieList/MovieListWillWatch";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesData: moviesData,
      moviesWillWatch: []
    }
  }

  onWillWatchClickHandler = (id, title, rating) => {
    let allMoviesWillWatch = this.state.moviesWillWatch;
    let chosenMovie = {
      id: id,
      title: title,
      rating: rating
    };

    let hasMovie = allMoviesWillWatch.some(item => {return item.id === chosenMovie.id});

    if(hasMovie) {
      let filteredMovies = allMoviesWillWatch.filter(item => {return item.id !== chosenMovie.id})

      this.setState({
        moviesWillWatch: filteredMovies
      })
    } else {
      allMoviesWillWatch.push(chosenMovie);

      this.setState({
        moviesWillWatch: allMoviesWillWatch
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <MovieList 
              moviesData={this.state.moviesData} 
              onWillWatchClickHandler={this.onWillWatchClickHandler}
            />
          </div>
          <div className="col-sm-3">
            <MovieListWillWatch moviesWillWatch={this.state.moviesWillWatch}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
