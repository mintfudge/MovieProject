import { useParams } from 'react-router'

export default function EditGenres() {
  const { id }: any = useParams()

  return (
    <>
      <h3>Edit Genres</h3>
      The id is {id}
    </>
  )
}
