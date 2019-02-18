import React, { Component } from 'react'
import MovieCard from './movie-card/MovieCard'
import AddCard from './add-card/AddCard'
import SearchBar from './searchBar/SearchBar'
import './Main.css'
import beirut from '../image/beirut.jpg'
import bladerunner from '../image/bladerunner.jpg'
import starWars from '../image/starWars.jpg'
import tallengeHollywood from '../image/tallengeHollywood.jpg'
import teenwolf from '../image/teenwolf.jpg'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movieList :[
        { img: beirut, name: 'beirut', description: '' },
        { img: bladerunner, name: 'bladerunner', description: '' },
        { img: starWars, name: 'starWars', description: '' },
        { img: tallengeHollywood, name: 'tallengeHollywood', description: '' },
        { img: teenwolf, name: 'teenwolf', description: '' }
      ],
      searchedValue: '',
      new: {}
    };
  }

  searchBar = (e) => {
    this.setState({ searchedValue : e.target.value })
  }

  addMovie = (newmovie) => {
   
    this.setState ({
      movieList: this.state.movieList.concat(newmovie)
    });
  }

  render() {
    return (
      <div className="main-container">
        <SearchBar triggerSearch={this.searchBar}/>
        <div className='movie-container'>
            {this.state.movieList.filter(el => el.name.includes(this.state.searchedValue)).map((movie, i) =>
                <MovieCard key={i} movie={movie}/>
            )}
            <AddCard triggerAdd={this.addMovie}/>
        </div>
      </div>
    )
  }
}

export default Main
