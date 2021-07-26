import React, { useState,useEffect} from 'react';
import Movies from "./components/movies";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

  function App() {
    const [moviesList, setMoviesList] = useState([]);
    const [search, setSearch] = useState("");

    const SEARCHAPI =
            `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`;

  useEffect(() => {
    fetchMovies();
  }, [])
  
  
  const fetchMovies = async () => {
    const response = await fetch(APIURL);
    const data = await response.json();

    setMoviesList(data.results);
  }
  const handleChange = (e) => {
      setSearch(e.target.value);
  }
  const fetchSearch = async() => { 
      const response = await fetch(SEARCHAPI);
      const data = await response.json();
      setMoviesList(data.results)
  }
  const handleSubmit = (e) => { 
    e.preventDefault();
    fetchSearch();
    setSearch("");
  }
  
  return <>
    <div className="form-container">
      <form onSubmit={ handleSubmit} className="form">
        <input type="text" value={search} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
    <div className="movie-container">
      {moviesList.map(movieList => (
        <Movies key={movieList.id} title={movieList.title} poster_path={movieList.poster_path} vote_average={movieList.vote_average} overview={ movieList.overview}/>
      ))}
    </div>
  </>
}

export default App;
