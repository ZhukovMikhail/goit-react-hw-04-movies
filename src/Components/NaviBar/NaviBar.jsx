import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NaviBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </div>
  );
}
