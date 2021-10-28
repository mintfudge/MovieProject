import GenericList from 'utils/GenericList'
import IndividualMovie from './IndividualMovie'
import { movieDTO } from './movies.model'
import css from './MoviesList.module.css'

export default function MoviesList(props: moviesListProps) {
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

interface moviesListProps {
  movie?: movieDTO[]
}
