import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';


import './index.css';
import App from './components/App';
//import movies from './reducers';
import rootReducer from './reducers';


const store = createStore(rootReducer);
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

