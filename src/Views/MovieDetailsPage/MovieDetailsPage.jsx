import { useEffect, useState } from 'react';
import { getMovieById } from '../../services/fetchApi';
import { useParams, useLocation, useHistory } from 'react-router';
const imgUrl = 'https://image.tmdb.org/t/p/w500/';

export default function MovieDetailsPage() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();

  const [movie, setMovie] = useState(null);

  const handleGoBack = () => {
    if (location.state?.from) {
      history.push(location.state?.from);
    }
  };

  useEffect(() => {
    getMovieById(params.movieId).then(setMovie);
  }, [params.movieId]);
  if (movie === null) {
    return <h1>Такого нет</h1>;
  }
  return (
    <div>
      <button onClick={handleGoBack} type="button">
        Назад
      </button>
      <h1>{movie.title}</h1>

      <img src={imgUrl + movie.poster_path} alt="" />
    </div>
  );
}
