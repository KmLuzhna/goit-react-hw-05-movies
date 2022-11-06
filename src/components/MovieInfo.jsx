
import PropTypes from 'prop-types';
import { GenersList, GenersListItem, Info, MovieContainer, MovieInfoContainer } from './MovieInfo.styled';

export default function MovieDescription({ movieDetails})  {
  const { poster_path, original_title, vote_average, overview, genres } =
    movieDetails;
  const voteAveragePercent = Math.floor(Number(vote_average) * 10);

  return (
    <>
      {' '}
      <MovieContainer>
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
              <MovieInfoContainer>
                  <h1>{original_title}</h1>
                  <div>
                      <h2>User rate:</h2>
                      <Info>{` ${voteAveragePercent}%`}</Info>
                  </div>
                  <div>
                      <h2>Overview:</h2>
                      <Info>{overview}</Info>
                  </div>
                  <div>
                      <h2>Geners:</h2>
                      <GenersList>
                          {genres.map(({ id, name }) => (
                              <GenersListItem key={id}>{name}</GenersListItem>
                          ))}
                      </GenersList>
                  </div>
        </MovieInfoContainer>
      </MovieContainer>
    </>
  );
};

MovieDescription.propTypes = {
  movieDetails: PropTypes.object.isRequired,
};