import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = "http://www.omdbapi.com/?<ADD YOUR API KEY HERE>&"

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const searchmovies = async(title) =>{
    const response = await fetch(`${API_URL}s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }
  useEffect(() => {
    searchmovies('superman')
  }, []);

  return (
    <div className='app'>
      <h1>MovieArea</h1>

      <div className='search'>
        <input placeholder='Search for movies' value={searchTerm} onChange= {(e)=>setSearchTerm(e.target.value)}/>
        <img src={searchIcon} alt="search" onClick={()=>searchmovies(searchTerm)}/>
      </div>

      {
        movies?.length > 0
        ?(
          <div className='container'>
            {movies.map((movie)=>(
                <MovieCard movie={movie}/>
            ))};

          </div>
        ): (
          <div className='empty'>
            <h2>No movies Found</h2>
          </div>
        )
      }
    </div>
    
  );
}
export default App;
