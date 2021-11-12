import CreateActor from "Actors/CreateActor";
import EditActor from "Actors/EditActor";
import IndexActors from "Actors/IndexActors";

import CreateGenre from "Genres/CreateGenre";
import EditGenre from "Genres/EditGenre";
import IndexGenres from "Genres/IndexGenres";

import CreateMovieTheater from "MovieTheaters/CreateMovieTheater";
import EditMovieTheater from "MovieTheaters/EditMovieTheater";
import IndexMovieTheaters from "MovieTheaters/IndexMovieTheaters";

import CreateMovie from "Movies/CreateMovie";
import EditMovie from "Movies/EditMovie";
import FilterMovie from "Movies/FilterMovie";

import LandingPage from "Movies/LandingPage";
import RedirectToLandingPage from "utils/RedirectToLandingPage";

const routes = [
  {path: "/genres", component: IndexGenres, exact: true},
  {path: "/genres/create", component: CreateGenre},
  {path: "/genres/edit/:id(\\d+)", component: EditGenre},

  {path: "/actors", component: IndexActors, exact: true},
  {path: "/actors/create", component: CreateActor},
  {path: "/actors/edit/:id(\\d+)", component: EditActor},

  {path: "/movietheaters", component: IndexMovieTheaters, exact: true},
  {path: "/movietheaters/create", component: CreateMovieTheater},
  {path: "/movietheaters/edit/:id(\\d+)", component: EditMovieTheater},

  {path: "/movies/create", component: CreateMovie},
  {path: "/movies/edit/:id(\\d+)", component: EditMovie},
  {path: "/movies/filter", component: FilterMovie},
  
  {path: "/", component: LandingPage, exact: true},
  {path: '*', component: RedirectToLandingPage},

];

export default routes;