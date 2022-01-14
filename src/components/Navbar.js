import React from 'react';
import {addSearchResults} from '../actions'

class Navbar extends React.Component{

constructor (props){
  super(props);
  this.state={
    showSearchResults:true,
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



render(){
 return(
    <div className='nav'>
      <div className='search-container'>
       <input onChange={ this.handleChange }/>
       <button id='search-btn' onClick={this.handleSearch}>Search</button>
      </div>

    </div>
 );

}


}


export default Navbar;
