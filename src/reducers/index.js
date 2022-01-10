import { ADD_MOVIES , ADD_FAVOURITE , REMOVE_FAVOURITE } from "../actions";

const initialMovieState = {
  list: [],
  favourites: []
}


export default function movies(state= initialMovieState , action ){
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
    default:
      return state
  }
  

}