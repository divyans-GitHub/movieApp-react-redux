import React from 'react';
import {connect} from 'react-redux';

import { addFavourite , removeFavourite } from '../actions';

class MovieCard extends React.Component{
  
  
  handleAddFavourite = () => {
    //const {store} = this.props;
    const {dispatch} = this.props;
    const {movie} = this.props;
    dispatch(addFavourite(movie));
  }

  handleRemoveFavourite = () => {
    //const {store} = this.props;
    const {dispatch} = this.props;
    const {movie} = this.props;
   dispatch(removeFavourite(movie));
  }

  
  isFavourite= (movie) => {
  
  //  const {store} = this.props;
  //  const {movies} = store.getState();
  //  const index = movies.favourites.indexOf(movie);
  // after connect we can do like this:

  const {moviesList} = this.props;
  const index = moviesList.favourites.indexOf(movie);
   if(index !== -1 ){
    return true;
   }
   return false;
  }


  render(){
   
    const {movie} = this.props;


    return (
      <div className='movie-card'>
        <div className='left'>
          <img alt='movie-poster' src={movie.Poster} />
        </div>
        <div className='right'>
          <div className='title'>{movie.Title}</div> 
          <div className='plot'>{movie.Plot} </div>
          <div className='footer'>
            <div className='rating'> {movie.imdbRating} </div>
            { this.isFavourite(movie)
              ? <button className='unfavourite-btn' onClick={this.handleRemoveFavourite }> UnFavourite </button>
              : <button className='favourite-btn' onClick={this.handleAddFavourite }> Favourite </button>
            }
          </div>
        </div>


      </div>
    );


  }

}

// lets connect MovieCard also
function mapStateToProps ({movies}){
  // destructuring movies from state
 return {
   moviesList : movies
 }
}

export default  connect(mapStateToProps)(MovieCard);
