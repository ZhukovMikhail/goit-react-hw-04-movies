import React, { useEffect, useState } from 'react';
import MoviesList from '../../Components/MoviesList/MoviesList';
import getTrendingMpvies from '../../services/fetchApi';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMpvies().then(setMovies);
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
      <MoviesList movies={movies} />
    </div>
  );
}
