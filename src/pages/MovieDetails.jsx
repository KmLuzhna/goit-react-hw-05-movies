// import Container from 'components/Container';
// import MovieAddictionalInfo from 'components/MovieAddictionalInfo';
// import MovieAddictionalInfo from 'components/MovieAddictionalInfo';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams, Outlet } from 'react-router-dom';
import { getMovieById } from '../components/API';
import MovieDescription from '../components/MovieInfo';
// import MovieCast from './Cast';

export default function MovieDetails() {
  const [filmDetails, setfilmDetails] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();
  const backLink = location.state?.from ?? '/react-homework-template';

  useEffect(() => {
    async function getFilmDetails() {
      const film = await getMovieById(movieId);
      setfilmDetails(film);
    }
    getFilmDetails();
  }, [movieId]);

  if (filmDetails === null) {
    return;
  }

  return (
    <main>
      <div>
        <NavLink to={backLink}>⬅️ Go Back</NavLink>
        <MovieDescription
          filmDetails={filmDetails}
          location={location}
          movieId={movieId}
        />
        <hr></hr>
      <h2>Additonal Information</h2>
      <ul>
        <li>
          <NavLink
            to='cast'
            state={{ ...location.state, movieId: movieId }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to='reviews'
            state={{ ...location.state, movieId: movieId }}
          >
            Reviews
          </NavLink>
        </li>
          </ul>
          <Outlet />
        {/* <MovieAddictionalInfo location={location} movieId={movieId} /> */}
      </div>
    </main>
  );
};
