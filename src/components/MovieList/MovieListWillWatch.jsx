import React, { Component } from 'react';

class MovieListWillWatch extends Component {
    render() {
        const {moviesWillWatch} = this.props;

        return (
            <div className="willWatchList">
                <p className="willWatchCount">Will Watch: {moviesWillWatch.length} movies</p>
        
                <div className="moviesWillWatchList">
                    <ul className="list-group">
                        {
                            moviesWillWatch.map(item => {
                                return (
                                    <li className="list-group-item" key={item.id}>
                                        <span>{item.title}</span>
                                        <span>{item.rating}</span>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default MovieListWillWatch;