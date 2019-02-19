import React, { Component } from 'react'
import Rating from './Rating'

export class StarRating extends Component {

  render() {
    return (
      <div className='Ratingfilter'>
        <Rating
          triggerRating={this.props.ratingFilter}
          rating={this.props.rating}
        />
      </div>
    )
  }
}

export default StarRating