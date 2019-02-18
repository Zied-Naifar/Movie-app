import React, { Component } from 'react'
import './searchBar.css'

export class SearchBar extends Component {


  render() {
    return (
      <div>
        <input type="text" className="searchBar" onChange={this.props.triggerSearch} placeholder="Search..." />
      </div>
    )
  }
}

export default SearchBar
