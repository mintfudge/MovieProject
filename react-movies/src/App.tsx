import IndividualMovie from './Movies/IndividualMovie';
import { movieDTO } from './Movies/movies.model';

function App() {
  const testMovie: movieDTO = {
    id: 1,
    title: 'O mágico de Oz',
    poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Wizard_of_oz_movie_poster.jpg/243px-Wizard_of_oz_movie_poster.jpg'
  }

  return (
    <>
      <IndividualMovie {...testMovie} ></IndividualMovie>
    </>
  );
}

export default App;
