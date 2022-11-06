import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieReviews } from '../components/API';

const Reviews = () => {
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
        {reviewInfo.length !== 0 ? (
          <ul>
            {reviewInfo.map(({ id, author, content }) => (
              <li key={id}>
                <p>
                  <b>{author}</b>
                </p>
                <p>{content}</p>
                <br />
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews here ^_^</p>
        )}
      </div>
    </section>
  );
};

export default Reviews;