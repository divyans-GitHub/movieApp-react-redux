// {
//  type: "ADD_Movies"
// },
// {
//  type: "IINCRESE_COUNT"
// }

export const ADD_MOVIES = "ADD_MOVIES";

export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

export const SHOW_FAVOURITES = "SHOW_FAVOURITES";

export function addMovies(movies ){
    return{
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourite (movie){
    return {
        type: ADD_FAVOURITE,
        movie: movie
    }
}

export function removeFavourite (movie){
    return {
        type: REMOVE_FAVOURITE,
        movie
    }
}

export function showFavourites(value){
  return {
      type: SHOW_FAVOURITES,
      value
  }
}




