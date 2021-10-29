import { useEffect, useState } from 'react';
// import {
//   useParams,
//   useLocation,
//   useHistory,
//   NavLink,
//   Route,
// } from 'react-router';
import { getMovieCredits } from '../../services/fetchApi';

export default function ReviewPage(movieId) {
  const [credits, setCredits] = useState(null);
  console.log(credits);

  useEffect(() => {
    getMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  return (
    credits && (
      <>
        <h1>credits</h1>
        <p>{credits}</p>
      </>
    )
  );
}
