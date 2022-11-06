import { Info } from 'components/MovieInfo.styled';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieReviews } from '../components/API';

export default function Reviews() {
  const [reviewInfo, setReviewInfo] = useState([]);
  const location = useLocation();
  const movieId = location.state.movieId;

  useEffect(() => {
    async function getReviewInfo() {
      const review = await getMovieReviews(movieId);
      setReviewInfo(review);
    }
    getReviewInfo();
  }, [movieId]);
  return (
    <section>
      <div>
        <hr></hr>
        {reviewInfo.length !== 0 ? (
          <ul>
            {reviewInfo.map(({ id, author, content }) => (
              <li key={id}>
                <Info>
                  <b>{author}</b>
                </Info>
                <Info>{content}</Info>
                <br />
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews here </p>
        )}
      </div>
    </section>
  );
};
