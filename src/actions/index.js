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
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";


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

export function addMovieToList (movie){
 return{
    type: ADD_MOVIE_TO_LIST,
    movie
 }
}




// above action creater was synchronous and return an object
// BUT below one has asynchronous request and wont return an object

export function addSearchResults(movie){
  
    let url = `https://www.omdbapi.com/?t=${movie}&apikey=b8586933`;
    
    // fetch(url)
    // .then((response) => response.json() )
    // .then( movie =>{
    //     console.log("MOVIE" , movie );

    //     // here we dispatch action to add it to store, but we don't have access of dispatch
    //     // so lets return function having argument as dispatch
    // })
    
    return function( dispatch ){
      fetch(url)
        .then((response) => response.json() )
        .then( movie =>{
            console.log("MOVIE" , movie );
            dispatch( addMovieSearchResult(movie) );
        })
    }

}

export function addMovieSearchResult (movie){
 return {
    type: ADD_SEARCH_RESULT,
    movie
 }
}

