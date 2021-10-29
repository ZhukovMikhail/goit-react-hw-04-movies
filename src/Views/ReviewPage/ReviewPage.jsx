import { useEffect, useState } from 'react';
import {
  useParams,
  useLocation,
  useHistory,
  NavLink,
  Route,
} from 'react-router';
import { getMovieReviews } from '../../services/fetchApi';

export default function ReviewPage(movieId) {
  const [review, setReview] = useState(null);
  console.log(review);

  useEffect(() => {
    getMovieReviews(movieId).then(setReview);
  }, [movieId]);

  return (
    review && (
      <>
        <h1>review</h1>
        <p>{review}</p>
      </>
    )
  );
}
