import React from 'react';
import Search from './components/Search';
import BuildingList from './components/BuildingList';
import App from './App';
// remove ID from the favourites array
deleteFavourite(id) {
  const { favourites } = this.state
  const newList = [
    ...favourites.slice(0, id),
    ...favourites.slice(id + 1)
    ]
  this.setState({
    favourites: newList
  })
}
