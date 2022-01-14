import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
//import movies from './reducers';
import rootReducer from './reducers';


//curried function logger(object , next , action );
//using applyMiddleware Redux will call logger like- logger(object)(next)(action);
// const logger = function( {dispatch , getState } ){
//   return  function( next ){
//     return function( action ){
//       console.log("ACTION_TYPE IS: " , action.type );
//       next( action ); //this is similar to call next middleware or dispatch
//     }
//   }
// }


// another way of writting logger middleware
const logger = ( {dispatch , getState} ) => (next ) => ( action ) =>{
  //middleware code
  //console.log("ACTION TYPE IS: " , action.type );
  if( typeof action !== 'function' ){
    console.log("ACTION TYPE IS: " , action.type );
  }
  next(action);
}


//thunk implementation
const thunk = ({dispatch , getState }) => (next) => (action) =>{
  if( typeof action === 'function' ){
    action(dispatch);
    return;
  }
  next(action);
}



const store = createStore(rootReducer , applyMiddleware( logger , thunk ) );
console.log("STORE IS: " , store );
// console.log("STATE IN STORE IS: " , store.getState());

// store.dispatch({
//  type: "ADD_MOVIES",
//  movies: [{name: "Spider Man far from home"}]
// });

// console.log("new state :" , store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App  store={store} />  {/*//pass store as a prop to App.js component  */}
  </React.StrictMode>,
  document.getElementById('root')
);

