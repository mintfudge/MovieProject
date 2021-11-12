import { useParams } from 'react-router'
import GenreForm from './GenreForm'

export default function EditGenres() {
  const { id }: any = useParams()

  return (
    <>
      <h3>Edit Genres</h3>
      <GenreForm
        model={{ name: 'Comedy' }}
        onSubmit={async value => {
          // when the form is posted
          await new Promise(r => setTimeout(r, 3000))
          console.log(id)
          console.log(value)
        }}
      />
    </>
  )
}
