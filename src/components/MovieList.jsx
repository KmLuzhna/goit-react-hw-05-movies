import { Outlet } from "react-router-dom";
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import {  useLocation } from 'react-router-dom';
import { Link, MoviesCard, TrendMovieList } from "./MovieList.styled";
// import Movies from "pages/Movies";


const MainFilmList = ({ movieList }) => {
  const location = useLocation();
  
  return (
    <div>
       <TrendMovieList>
      {movieList.map(({ id, poster_path, title }) => (
          <MoviesCard key={id}>
              <Link
                    to={{
                        // pathname: `movies/${`${id}`}`,
                      pathname: `/goit-react-hw-05-movies/movies/${`${id}`}`,
                        state: {
                        from: {
                            location,
                            label: 'Back to Home',
                        },
                        },
                    }}
                    >
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
            <p>{title}</p>
                  
                </Link>
        </MoviesCard>
      ))}
      </TrendMovieList>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
   
    
    
  );
};

MainFilmList.propTypes = {
  movieList: PropTypes.array.isRequired,
};

export default MainFilmList;