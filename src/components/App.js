import React from 'react';
import {data} from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';

import {addMovies} from '../actions'

class App extends React.Component {
  
  componentDidMount(){
  
  // 1. we ll make Api call
  //2. we ll dispatch an action
   const {store} = this.props;
   
   store.subscribe( ()=>{
    console.log("updated");
    // this.forceUpdate();  //it will forcefully update this component but we should avoid this
   } )


    store.dispatch( addMovies(data) );  //this action creator will return action object
    console.log("state is :" , store.getState());
  }

  render(){
    
    const  {list} =  this.props.store.getState();  //{list:[] , favourites:[]}
    console.log("in render, state: " , this.props.store.getState() )

    return (
      <div className="App">
        <Navbar />
        <div className='main'>
        <div className="tabs">
          <div className='tab'>MOVIES</div>
          <div className='tab'> FAVOURITES</div>
        </div>
        
        
        <div className='list'>
          {list.map((movie , index ) => (
            <MovieCard  movie={movie}  key={`movies-${index}`} />
          ))}

        </div>
        </div>
      </div>
    );
  }
}

export default App;
