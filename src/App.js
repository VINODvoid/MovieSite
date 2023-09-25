import './App.css';
import { useEffect, useState } from 'react';
import SeachIcon from './search.svg';
import MovieCard from './MovieCard';
const App = () => {
  const [searchTerm , setSearchTerm] = useState('');
  const [movies , setMovies] = useState([]);
  // 96b0c1aa
  const API_URL = 'https://www.omdbapi.com?apikey=96b0c1aa';
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(() =>{
    searchMovies('batman');
  },[]);
  return (
    <div className="app">
      <h1>FreeMovies</h1>
    
      <div className="search">
        <input type="text" name="" id=""  placeholder='Search For Movies' value={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)}/>
        <img src={SeachIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
      </div>
      {
        movies?.length >0 ? (<div className="container">
        {movies.map((movie)=>
        (<MovieCard movie ={movie} />)

        )}
      </div>) :
      (
        <div className="empty"><h2>No Movies Found</h2></div>
      )
      }
      
    </div>
  );
}
export default App;
