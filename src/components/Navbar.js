import React from 'react';
import { StoreContext , connect } from '..';
import {addSearchResults , addMovieToList } from '../actions'

class Navbar extends React.Component{

constructor (props){
  super(props);
  this.state={
    searchTexts: ''
  }
}

handleChange = (e) =>{
  this.setState({
    searchTexts: e.target.value
  })
 
};

handleSearch = () => {
 const { searchTexts } = this.state;   //***I have made mistake in spelling of searchTexts that is present in the State***
 this.props.store.dispatch(addSearchResults(searchTexts));
};

handleAddResultsToMovie = (movie) =>{
 
  this.props.store.dispatch(addMovieToList(movie));

}


render(){
  //const {search} = this.props.store.getState();
  //const {results , showSearchResults } = search;

  const {results , showSearchResults } = this.props.search;
 return(
    <div className='nav'>
      <div className='search-container'>
       <input onChange={ this.handleChange }/>
       <button id='search-btn' onClick={this.handleSearch}>Search</button>
      
      
       {showSearchResults && <div className='search-results'>
          <div className='search-result' >
            <img src={results.Poster}  alt='search-pic'/>

            <div className='movie-info'>
             <span> {results.Title} </span>  
             <button onClick={() => this.handleAddResultsToMovie(results)}> Add To Movies </button>
            </div>
          </div>
          </div> 
       }
     </div> 
    </div>
  );

}

}

// class NavbarWrapper extends React.Component{
//   render() {
//     return (
//      <StoreContext.Consumer>
//        {(store) => <Navbar store={store} /> }
//      </StoreContext.Consumer>
//     );
//   }
// }


//using Connect()
function mapStateToProps(state){
  return {
    search: state.search
  }
}

const ConnectedNavbarComponent = connect(mapStateToProps)(Navbar);

export default ConnectedNavbarComponent;
