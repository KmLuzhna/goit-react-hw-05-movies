// import PropTypes from 'prop-types';
// // import { HeaderLink } from './Layout.styled';
// import { NavLink, Outlet} from 'react-router-dom';

// const MovieAddictionalInfo = ({ location, movieId }) => {
//   return (
//     <>
//       <h2>Additonal Information</h2>
//       <ul>
//         <li>
//           <NavLink
//             to='cast'
//             state={{ ...location.state, movieId: movieId }}
//           >
//             Cast
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to='reviews'
//             state={{ ...location.state, movieId: movieId }}
//           >
//             Reviews
//           </NavLink>
//         </li>
//           </ul>
//           <Outlet />
//     </>
//   );
// };

// MovieAddictionalInfo.propTypes = {
//   movieId: PropTypes.string.isRequired,
//   location: PropTypes.object.isRequired,
// };

// export default MovieAddictionalInfo;