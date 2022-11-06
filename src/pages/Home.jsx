
import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../components/API';
import MainFilmList from 'components/MovieList';

export default function Home() {
const [movies, setMovies] = useState([]);


useEffect(() => {
    const getMovies = async () => {
        const { results } = await getTrendingMovies();

        setMovies(results);
    };

    getMovies();
}, []);

return (
    <>
    <h1>Tranding today</h1>
    <MainFilmList movieList={movies}/>
    </>
);
};
