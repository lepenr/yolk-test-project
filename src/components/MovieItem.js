import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './MovieItem.css';

//might be refactor to functional component, does not hold any state


class MovieItem extends Component {
    render() {
        return (
            <div>
                <div className='card-img'>
                    <LazyLoadImage
                        alt={this.props.alt}
                        height={150}
                        src={this.props.src}
                        width={'auto'}
                    />
                </div>
                <h2 className='card-name'>{this.props.name}</h2>

                <div className='wraper-description' >


                    <div className='move-stats '>
                        <h4 className='card-desc'>MOVES</h4>
                        {this.props.moves.map(move => (
                            <p>{move}</p>
                        ))}
                    </div>
                    <hr ></hr>
                    <div className='move-stats stats'>
                        <h4 className='card-desc'>STATS</h4>
                        <p className=''>speed: {this.props.stats.speed}</p>
                        <p >attack: {this.props.stats.attack}</p>
                        <p>defense: {this.props.stats.defense}</p>

                    </div>
                </div>
            </div>
        )
    }
}


export default MovieItem;