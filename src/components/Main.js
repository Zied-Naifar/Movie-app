import React, { Component } from 'react'
import MovieCard from './movie-card/MovieCard'
import AddCard from './add-card/AddCard'
import SearchBar from './searchBar/SearchBar'
import StarRating from './starRating/StarRating'
import './Main.css'
import beirut from '../image/beirut.jpg'
import bladerunner from '../image/bladerunner.jpg'
import starWars from '../image/starWars.jpg'
import tallengeHollywood from '../image/tallengeHollywood.jpg'
import teenwolf from '../image/teenwolf.jpg'

const movies = [
  { img: beirut, name: 'beirut', description: '', rating : 3 },
  { img: bladerunner, name: 'bladerunner', description: '', rating : 4 },
  { img: starWars, name: 'starWars', description: '', rating : 3 },
  { img: tallengeHollywood, name: 'tallengeHollywood', description: '', rating : 3 },
  { img: teenwolf, name: 'teenwolf', description: '', rating : 5 }
];

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movieList :movies,
      searchedValue: '',
      new: {},
      ratingFilter: 1
    };
  }

  // displayedMovie = () => {
  //   this.setState(this.state.movieList.filter(
  //   el => el.name.includes(this.state.searchedValue) 
  //   && 
  //   el.rating >= this.state.ratingFilter
  //   ))
  // }

  searchBar = (e) => {
    this.setState({ searchedValue : e.target.value })
  }

  addMovie = (newmovie) => {
   
    this.setState ({
      movieList: this.state.movieList.concat(newmovie)
    });
  }

  ratingFilter = (i) => {
    this.setState ({ ratingFilter: i  });
  
  }



  render() {
    return (
      <div className="main-container">
        <div className='header'>
          <SearchBar triggerSearch={this.searchBar} />
          <StarRating 
            ratingFilter={this.ratingFilter}
            rating={this.state.ratingFilter}
          />
        </div>
        <div className='movie-container'>
          {this.state.movieList.filter(el => el.name.includes(this.state.searchedValue) 
          && el.rating >= this.state.ratingFilter).map((movie, i) =>
            <MovieCard
              key={i} 
              movie={movie}
            />
          )}
            <AddCard triggerAdd={this.addMovie}/>
        </div>
      </div>
    )
  }
}

export default Main
