import { Outlet } from "react-router-dom";
import React, { Suspense } from 'react';
// import { FilmList, FilmCard, FilmWraper } from 'pages/Home.styled';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
// import MoviePoster from './MoviePoster';

const MainFilmList = ({ movieList }) => {
  const location = useLocation();
  return (
    <div>
       <ul>
      {movieList.map(({ id, poster_path, title }) => (
          <li key={id}>
              <Link
                    to={{
                        // pathname: `movies/${`${id}`}`,
                      pathname: `/react-homework-template/movies/${`${id}`}`,
                        state: {
                        from: {
                            location,
                            label: 'Back to Home',
                        },
                        },
                    }}
                    >
                  <p>{title}</p>
                  <img
                      src={
                          poster_path
                              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                              : 'https://via.placeholder.com/200x300'
                      }
                      alt=""
                      height="300"
                      width="200"
                  />
                  
                </Link>
        </li>
      ))}
      </ul>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
   
    
    
  );
};

MainFilmList.propTypes = {
  movieList: PropTypes.array.isRequired,
  // location: PropTypes.object.isRequired,
  // page: PropTypes.string.isRequired,
};

export default MainFilmList;