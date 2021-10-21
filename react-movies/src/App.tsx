import { movieDTO } from './Movies/movies.model';

function App() {
  const inTheathers: movieDTO[] = [
    {
    id: 1,
    title: 'O mágico de Oz',
    poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Wizard_of_oz_movie_poster.jpg/243px-Wizard_of_oz_movie_poster.jpg'
  }
];

  return (
    <>
      <h3>In theathers</h3>
    </>
  );
}

export default App;
