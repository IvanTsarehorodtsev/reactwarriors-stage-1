import React, { Component } from 'react';

class MovieItem extends Component {
    constructor(props) {
        super(props);

        const {title, rating, image, id} = this.props;

        this.state = {
            id: id,
            title: title, 
            rating: rating, 
            image: image, 
            choosed: false
        }
    }

    onClickWillWatch = () => {
        this.props.onWillWatchClickHandler(this.state.id, this.state.title, this.state.rating);

        this.setState(prevState => ({
            choosed: !prevState.choosed
        }));
    }

    render() {
        
        
        return (
            <div className="card">
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${this.state.image}`} alt="Card image cap" />
                <div className="card-body">
                    <h6 className="card-title">{this.state.title}</h6>
                    <div className="ratingBlock">
                        <p className="card-text rating">{"Rating: " + this.state.rating}</p>
                        <button type="button" className={"btn " + ( this.state.choosed ? "btn-success" : "btn-secondary")} onClick={this.onClickWillWatch}>Will watch</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieItem;