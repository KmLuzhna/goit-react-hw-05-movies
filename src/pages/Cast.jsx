import { CastItem, CastList } from 'components/Cast.styled';
import { useEffect, useState } from 'react';
// import { NavLink, useLocation, useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../components/API';



export default function MovieCast() {
  const [filmCast, setFilmCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      const cast = await getMovieCast(movieId);
      setFilmCast(cast);
    }
    getCast();
  }, [movieId]);

 if (!filmCast) {
    return;
  }

  return (
    <main>
      <div>
        <CastList>
        {filmCast && filmCast.map(({ id, profile_path, name, character }) => (
            <CastItem key={id}>
                
               <img src={
                        profile_path
                     ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                              : 'https://via.placeholder.com/200x300'
                }
                alt={name}
                width="100"
                height=""
                />
                <p>{name}</p>
                <p>Character: {character}</p>
            </CastItem>
        ))}
    </CastList>   

      </div>
    </main>
  );
};
