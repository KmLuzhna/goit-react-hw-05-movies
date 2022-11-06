
// import PropTypes from 'prop-types';
// import {
//   FilmTitle,
//   FilmDescriptionWrapper,
//   FilmGener,
// } from 'pages/MovieDetails.styled';
// import MoviePoster from './MoviePoster';
// import {
//   DescriptionCategory,
//   DescriptionWrapper,
// } from './MovieDescription.styled';
// import MovieAddictionalInfo from './MovieAddictionalInfo';
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

// import { Link } from "react-router-dom";

export default function MovieDescription({ filmDetails, location, movieId })  {
  const { poster_path, original_title, vote_average, overview, genres } =
    filmDetails;
  const voteAveragePercent = Math.floor(Number(vote_average) * 10);

  return (
    <>
      {' '}
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'https://via.placeholder.com/300x450'
          }
                  alt=""
          width="300"
          height="450"
              />
              <div>
                  <h1>{original_title}</h1>
                  <div>
                      <h2>User rate</h2>
                      <p>{` ${voteAveragePercent}%`}</p>
                  </div>
                  <div>
                      <h2>Overview</h2>
                      <p>{overview}</p>
                  </div>
                  <div>
                      <h2>Geners</h2>
                      <ul>
                          {genres.map(({ id, name }) => (
                              <p key={id}>{name}</p>
                          ))}
                      </ul>
                  </div>
        </div>
      </div>
      {/* <FilmDescriptionWrapper>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </FilmDescriptionWrapper> */}
    </>
  );
};

// MovieDescription.propTypes = {
//   filmDetails: PropTypes.object.isRequired,
// };