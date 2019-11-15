import React, { Component } from 'react'
import MovieItem from './MovieItem'
import './MovieItem.css';

//might be refactor to functional component, does not hold any state


class MovieCard extends Component {


    render() {
        return this.props.cardData.map((item) => (

            <div className='box-wraper zoom'>
                <MovieItem alt={this.props.alt} src={item.image} moves={item.moves} stats={item.stats} name={item.name} />

            </div>
        ))
    }
}


export default MovieCard;