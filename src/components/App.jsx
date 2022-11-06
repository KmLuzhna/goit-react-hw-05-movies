import { lazy } from 'react';
import { Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
// import Movies from "../pages/Movies";
// import MovieDetails from "pages/MovieDetails";
// import { SharedLayout } from "./SharedLayout";
// import MovieCast from "pages/Cast";
// import Reviews from "pages/Reviews";


const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const MovieCast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));
const SharedLayout = lazy(() => import('./SharedLayout'));


export const App = () => {
  return (
    <Routes>
      <Route path="/react-homework-template" element={<SharedLayout />}>
        <Route index element={<Home/>} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
         <Route path="*" element={<h1>Page Not Found</h1>} />
      </Route>
    </Routes>
  );
};
