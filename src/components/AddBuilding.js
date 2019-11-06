import React from 'react';
import Search from './components/Search';
import BuildingList from './components/BuildingList';
import App from './App';
// add clicked name ID to the favourites array
addFavourite(id) {
  const newSet = this.state.favourites.concat([id])
  this.setState({
    favourites: newSet
  })
}
