import React from 'react';
//import {data} from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';



function App( props ) {
  console.log("props" , props );
  const  data =  props.store.getState();
 console.log(data);
  return (
    <div className="App">
      <Navbar />
      <div className='main'>
       <div className="tabs">
         <div className='tab'>MOVIES</div>
         <div className='tab'> FAVOURITES</div>
       </div>
       
       
       <div className='list'>
        {data.map((movie , index ) => (
          <MovieCard  movie={movie}  key={`movies-${index}`} />
        ))}

       </div>
      </div>
    </div>
  );
}

export default App;
