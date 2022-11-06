import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import MainFilmList from 'components/MovieList';
import { getMoviesQuery } from '../components/API';

export default function Movies () {
// const location = useLocation();
    
    // const [searchMovies, setSearchMovies] = useSearchParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchMovies, setSearchMovies] = useState([]);
    const [movieQuery, setMovieQuery] = useState('');

    const movieName = searchParams.get("query") ?? "";

const handleSubmit  = e => {
    e.preventDefault();
    if (movieQuery === movieName) {
      return alert('Enter new movie Title ^_^');
    }
    setSearchParams(movieQuery !== '' ? { query: movieQuery } : {});
  };

useEffect(() => {
    if (movieName === '') {
      return;
    }
    async function getMovieByQuery() {
      const searchMovies = await getMoviesQuery(movieName);
      setSearchMovies(searchMovies.results);
    }
    getMovieByQuery();
    setMovieQuery(movieName);
}, [movieName]);
    
    
return (
    <>
    <h2>Search Movies</h2>
        <form  onSubmit={handleSubmit}>
          <input
            type="text"
            value={movieQuery}
                onChange={e => setMovieQuery(e.target.value)}
                autoFocus
                placeholder="Search movie"
          />
          <button type="submit">Search</button>
        </form>
        {searchMovies.length === 0 ? (
          <h3>Find Something </h3>
        ) : (
          <MainFilmList
            movieList={searchMovies}
            // location={location}
            // page={'movies'}
          />
        )}
    </>
);
};