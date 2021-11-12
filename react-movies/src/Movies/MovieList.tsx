import GenericList from 'utils/GenericList'
import IndividualMovie from './IndividualMovie'
import { movieDTO } from './movies.model'
import css from './MovieList.module.css'

export default function MovieList(props: movieListProps) {
  return (
    <GenericList list={props.movie}>
      <div className={css.div}>
        {props.movie?.map(movie => (
          <IndividualMovie {...movie} key={movie.id} />
        ))}
      </div>
    </GenericList>
  )
}

interface movieListProps {
  movie?: movieDTO[]
}
