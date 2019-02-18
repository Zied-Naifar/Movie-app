import React, { Component } from 'react'
import './MovieCard.css'

class MovieCard extends Component {

  render() {
    return (
      <div className='movieCard'>
        <img className='movie-img' src={this.props.movie.img} alt=''></img>
        <div className='movie-text'>
            <p>{this.props.movie.name}</p>
            <p>{this.props.movie.description}</p>
        </div>
      </div>
    )
  }
}

export default MovieCard
