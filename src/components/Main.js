import React, { Component } from 'react'
import MovieCard from './movie-card/MovieCard'
import AddCard from './add-card/AddCard'
import './Main.css'
import beirut from '../image/beirut.jpg'
import bladerunner from '../image/bladerunner.jpg'
import starWars from '../image/starWars.jpg'
import tallengeHollywood from '../image/tallengeHollywood.jpg'
import teenwolf from '../image/teenwolf.jpg'


let movieList =
    [
        { img: beirut, name: 'beirut', description: '' },
        { img: bladerunner, name: 'bladerunner', description: '' },
        { img: starWars, name: 'starWars', description: '' },
        { img: tallengeHollywood, name: 'tallengeHollywood', description: '' },
        { img: teenwolf, name: 'teenwolf', description: '' }
    ]

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className='movie-container'>
            {movieList.map((movie, i) =>
                <MovieCard key={i} movie={movie}/>
            )}
            <AddCard />
        </div>
      </div>
    )
  }
}

export default Main
