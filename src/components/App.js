import React, { Component } from 'react'
import MovieCard from './MovieCard'
import './App.css';
import bg_desktop from '../img/bg_desktop.jpg';


const data = require('../data/card-data.json');


class App extends Component {

  componentDidMount() {
    this.setState({
      cardData: [...data.pokemon]
    });

  }

  //state definition
  state =
  {
    cardData: []
  }

  render() {
    return (
      <div>

        <div className='header'></div>
        <div className='container'>
          <div className="App">

            <MovieCard className='box' cardData={this.state.cardData} />
          </div>
        </div>
      </div>
    )
  }
}


export default App;
