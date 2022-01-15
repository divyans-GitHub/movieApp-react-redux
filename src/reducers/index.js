
import { combineReducers } from "redux";

import { ADD_MOVIES , ADD_FAVOURITE , REMOVE_FAVOURITE , SHOW_FAVOURITES ,ADD_SEARCH_RESULT , ADD_MOVIE_TO_LIST } from "../actions";

const initialMovieState = {
  list: [],
  favourites: [],
  showFavourites: false
}


export function movies(state= initialMovieState , action ){
  // if(action.type === ADD_MOVIES ){
  //   return {
  //     ...state,
  //     list: action.movies
  //   }
  // }
  // return state;

  //Generally we use switch case in react instead of if else statements

  switch(action.type){
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies
      }
    case ADD_FAVOURITE:
      return{
        ...state,
        favourites: [action.movie , ...state.favourites ]
      }
    case REMOVE_FAVOURITE:
      let index = state.favourites.indexOf(action.movie);
      let favs = state.favourites.filter((m) => {
       return state.favourites.indexOf(m) !== index;
      })
      return {
        ...state,
        favourites: favs

      }
    case SHOW_FAVOURITES:
      return{
        ...state,
        showFavourites: action.value
      }
    case ADD_MOVIE_TO_LIST:
      return{
        ...state,
        list: [ action.movie , ...state.list ]
      }
    default:
      return state
  }
  
}

const initialSearchState = {
  results:{},
  showSearchResults:false
}
// search reducer
export function search(state = initialSearchState , action ) {
  switch(action.type){
    case ADD_SEARCH_RESULT :
      return {
        ...state ,
        results: action.movie,
        showSearchResults:true
      };
    case ADD_MOVIE_TO_LIST:
      return{
        ...state,
        showSearchResults: false
      }
    default :
      return state;
  } 
 
}

// const initialRootState = {
//   movies: initialMovieState,
//   search: initialSearchState
// }

// export default function rootReducer(state = initialRootState , action  ){
//  return{
//    movies: movies(state.movies , action ),
//    search: search(state.search , action )
//  }
// }

export default combineReducers({
  movies,
  search
});