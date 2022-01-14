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

        })
    }

}



