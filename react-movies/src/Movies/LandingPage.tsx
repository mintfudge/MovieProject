import { useEffect, useState } from 'react'
import { landingPageDTO } from './movies.model'
import MovieList from './MovieList'

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({})

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: 'O mágico de Oz',
            poster:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Wizard_of_oz_movie_poster.jpg/243px-Wizard_of_oz_movie_poster.jpg'
          },
          {
            id: 2,
            title: 'Alice no País das Maravilhas',
            poster:
              'https://upload.wikimedia.org/wikipedia/pt/f/ff/Alice-In-Wonderland-Theatrical-Poster.jpg'
          }
        ],
        upcomingReleases: [
          {
            id: 3,
            title: 'Sing',
            poster:
              'https://upload.wikimedia.org/wikipedia/en/b/bb/Sing_%282016_film%29_poster.jpg'
          }
        ]
      })
    }, 1000)

    return () => clearTimeout(timerId)
  })

  return (
    <>
      <h3>In theaters</h3>
      <MovieList movie={movies.inTheaters} />
      <h3>Upcoming releases</h3>
      <MovieList movie={movies.upcomingReleases} />
    </>
  )
}
