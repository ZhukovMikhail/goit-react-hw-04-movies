import { useState, useEffect } from 'react';
import { getMoviesByQuery } from '../../services/fetchApi';
import MoviesList from '../../Components/MoviesList/MoviesList';
import { useHistory } from 'react-router-dom';

export default function MoviesPage() {
  const history = useHistory();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (history.location?.search !== '') {
      const prevQuery = history.location?.search.split('=')[1];
      getMoviesByQuery(prevQuery).then(setMovies);
      setQuery(prevQuery);
      //   console.log(history.location?.search);
    }
  }, [history.location?.search]);

  function handleSubmit(e) {
    e.preventDefault();
    getMoviesByQuery(query).then(setMovies);
    history.push({ ...history.location, search: `?query=${query}` });
  }

  return (
    <div>
      <h1>MoviesPage</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setQuery(e.target.value)}
          value={query}
        />

        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
}
