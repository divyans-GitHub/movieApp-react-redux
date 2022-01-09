// {
//  type: "ADD_Movies"
// },
// {
//  type: "IINCRESE_COUNT"
// }

export const ADD_MOVIES = "ADD_MOVIES";

export function addMovies(movies ){
    return{
        type: ADD_MOVIES,
        movies
    }
}