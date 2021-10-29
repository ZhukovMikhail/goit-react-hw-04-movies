import { Route, Switch } from 'react-router';
import HomePage from './Views/Home/HomePage.jsx';
import MovieDetailsPage from './Views/MovieDetailsPage/MovieDetailsPage.jsx';
import MoviesPage from './Views/MoviesPage/MoviesPage.jsx';
import './App.css';
import NaviBar from './Components/NaviBar/NaviBar.jsx';

function App() {
  return (
    <div className="App">
      <NaviBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
