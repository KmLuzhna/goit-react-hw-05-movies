import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import MainFilmList from 'components/MovieList';
import { getMoviesQuery } from '../components/API';
import { ButtonSearch, Input } from 'components/Movie.styled';

export default function Movies () {

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchMovies, setSearchMovies] = useState([]);
    const [movieQuery, setMovieQuery] = useState('');

    const movieName = searchParams.get("query") ?? "";

const handleSubmit  = e => {
    e.preventDefault();
    if (movieQuery === movieName) {
      return alert('Please, enter movie name!');
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
          <Input
            type="text"
            value={movieQuery}
                onChange={e => setMovieQuery(e.target.value)}
                autoFocus
                placeholder="Search movie"
          />
          <ButtonSearch type="submit">Search</ButtonSearch>
    </form>
    <MainFilmList movieList={searchMovies}/>
    </>
);
};