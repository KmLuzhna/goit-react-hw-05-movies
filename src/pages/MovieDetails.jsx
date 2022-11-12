import { AdditonalInfoItem, AdditonalInfoList, Link } from 'components/MovieList.styled';
import { useEffect, useState } from 'react';
import React, { Suspense } from 'react';
import { NavLink, useLocation, useParams, Outlet } from 'react-router-dom';
import { getMovieById } from '../components/API';
import MovieDescription from '../components/MovieInfo';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();
  // const backLink = location.state?.from ?? '/goit-react-hw-05-movies';
  const backLink = location.state?.from ?? '/movies';

  useEffect(() => {
    async function getFilmDetails() {
      const film = await getMovieById(movieId);
      setMovieDetails(film);
    }
    getFilmDetails();
  }, [movieId]);

  if (movieDetails === null) {
    return;
  }

  return (
    <main>
      <div>
        <NavLink to={backLink}> Go Back </NavLink>
        <MovieDescription
          movieDetails={movieDetails}
          location={location}
          movieId={movieId}
        />
        <hr></hr>
      <h2>Additonal Information</h2>
      <AdditonalInfoList>
        <AdditonalInfoItem>
          <Link
            to='cast'
            state={{ ...location.state, movieId: movieId }}
          >
            Cast
          </Link>
        </AdditonalInfoItem>
        <AdditonalInfoItem>
          <Link to='reviews'
            state={{ ...location.state, movieId: movieId }}
          >
            Reviews
          </Link>
        </AdditonalInfoItem>
          </AdditonalInfoList>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
        {/* <MovieAddictionalInfo location={location} movieId={movieId} /> */}
      </div>
    </main>
  );
};
