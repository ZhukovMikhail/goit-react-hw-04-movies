import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from:
                    location.pathname === '/'
                      ? '/'
                      : '/movies' + location.search,
                },
              }}
            >
              <h3>{movie.original_title}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
