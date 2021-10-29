import { useEffect, useState } from 'react';
import { getMovieById } from '../../services/fetchApi';
import {
  useParams,
  useLocation,
  useHistory,
  NavLink,
  Route,
} from 'react-router-dom';
import CastPage from '../CastPage/CastPage';
import ReviewPage from '../ReviewPage/ReviewPage';

const imgUrl = 'https://image.tmdb.org/t/p/w500/';

export default function MovieDetailsPage() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();

  const [movie, setMovie] = useState(null);
  console.log(movie);
  console.log('params', params);

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
      <h1>
        {movie.title} ({movie.release_date.slice(0, 4)})
      </h1>
      <h4>{movie.tagline}</h4>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{movie.genres.map(genre => genre.name)}</p>
      <img src={imgUrl + movie.poster_path} alt="" />
      <hr />
      <p>Addition information</p>
      <ul>
        <li>
          <NavLink to={{ pathname: `/movies/${params.movieId}/casts` }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/movies/${params.movieId}/reviews` }}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Route path={{ pathname: `/movies/${params.movieId}/casts` }}>
        <CastPage movieId={params.movieId} />
      </Route>
      <Route path={{ pathname: `/movies/${params.movieId}/reviews` }}>
        <ReviewPage movieId={params.movieId} />
      </Route>
    </div>
  );
}
