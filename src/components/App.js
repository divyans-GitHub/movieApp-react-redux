import React from 'react';
import {data} from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';

//import {StoreContext , connect } from '../index.js'
import {connect} from 'react-redux';

import {addMovies , showFavourites } from '../actions'

class App extends React.Component {
  
  componentDidMount(){
  
  // 1. we ll make Api call
  //2. we ll dispatch an action
  // const {store} = this.props;
   
  //  store.subscribe( ()=>{
  //   console.log("updated");
  //    this.forceUpdate();  //it will forcefully update this component but we should avoid this
  //  } )

    const {dispatch} = this.props;
    dispatch( addMovies(data) );  //this action creator(addMovies) will return action object
   // console.log("state is :" , store.getState());
  }
  
  changeTab = (value) => {
    //const {store} = this.props;
    const {dispatch} = this.props;
    dispatch( showFavourites(value) );
  }
  

  render(){

    //let rootState = this.props.store.getState();  // {movies:{} , search:{}}
    const {movie} = this.props;
    let  {list , favourites , showFavourites } =movie;       // older State was {list:[] , favourites:[]}
   // console.log("in render, state: " , this.props.store.getState() )
    
    let displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar />
        <div className='main'>
        <div className="tabs">
          <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.changeTab(false)} > MOVIES     </div>
          <div className={`tab ${showFavourites ? 'active-tabs' : ''}`}  onClick={() => this.changeTab(true)} > FAVOURITES </div>
        </div>
        
        
        <div className='list'>
          {displayMovies.map((movie , index ) => (
            <MovieCard  movie={movie}  key={`movies-${index}`}  />
          ))}
          {/* Now you don't have Store ,so you can;t pass it to MovieCard */}
        </div>
        {displayMovies.length === 0 ? <div>No Movie Has Been Added To Favourites </div> : null }
        </div>
      </div>
    );
  }
}


//since we are using store as props outside render also and Consumer can be only in render so,we create wrapper
// class AppWrappper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} /> }
//       </StoreContext.Consumer>
//     );
//   }
// } 

//another way is connect()
function callback(state){
 //it will return all things that you waant to have access
 return {
   movie: state.movies,
   search: state.search
 }
}

const ConnectedAppComponent = connect(callback)(App);


export default ConnectedAppComponent;
