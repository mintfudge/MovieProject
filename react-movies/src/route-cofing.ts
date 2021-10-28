import CreateActors from "Actors/CreateActors";
import EditActors from "Actors/EditActors";
import IndexActors from "Actors/IndexActors";

import CreateGenres from "Genres/CreateGenres";
import EditGenres from "Genres/EditGenres";
import IndexGenres from "Genres/IndexGenres";

import CreateMovieTheaters from "MovieTheaters/CreateMovieTheaters";
import IndexMovieTheaters from "MovieTheaters/IndexMovieTheaters";
import EditMovieTheaters from "MovieTheaters/EditMovieTheaters";

import CreateMovie from "Movies/CreateMovie";
import EditMovie from "Movies/EditMovie";
import FilterMovies from "Movies/FilterMovies";

import LandingPage from "Movies/LandingPage";
import RedirectToLandingPage from "utils/RedirectToLandingPage";

const routes = [
  {path: "/genres", component: IndexGenres, exact: true},
  {path: "/genres/create", component: CreateGenres},
  {path: "/genres/edit/:id(\\d+)", component: EditGenres},

  {path: "/actors", component: IndexActors, exact: true},
  {path: "/actors/create", component: CreateActors},
  {path: "/actors/edit/:id(\\d+)", component: EditActors},

  {path: "/movietheaters", component: IndexMovieTheaters, exact: true},
  {path: "/movietheaters/create", component: CreateMovieTheaters},
  {path: "/movietheaters/edit/:id(\\d+)", component: EditMovieTheaters},

  {path: "/movies/create", component: CreateMovie},
  {path: "/movies/edit/:id(\\d+)", component: EditMovie},
  {path: "/movies/filter", component: FilterMovies},
  
  {path: "/", component: LandingPage, exact: true},
  {path: '*', component: RedirectToLandingPage},

];

export default routes;