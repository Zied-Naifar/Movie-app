import React from 'react'
import './Rating.css'

const Rating = ({rating, triggerRating}) => {
    let stars = []
    for(let i = 0; i < 5; i++) {
        if(i < rating) {
            stars.push(<span className='Star' onClick={() => triggerRating(i+1)} key={i}>★</span>)
        }
        else {
            stars.push(<span className='Star' onClick={() => triggerRating(i+1)} key={i}>☆</span>)
        }
    }
    return (
        <div>{stars}</div>
    )
}

export default Rating