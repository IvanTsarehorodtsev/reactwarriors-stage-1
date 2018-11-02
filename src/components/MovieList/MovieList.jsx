import React, { Component } from 'react';
import MovieItem from "./MovieItem";

class MovieList extends Component {
    render() {
        return (
            <div className="moviesList">
                {
                    this.props.moviesData.map(item => {
                        return (
                            <MovieItem 
                                id={item.id}
                                key={item.id}
                                title={item.title}
                                image={item.backdrop_path}
                                rating={item.vote_average}
                                onWillWatchClickHandler={this.props.onWillWatchClickHandler}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default MovieList;