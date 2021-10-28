import { useHistory } from 'react-router'
import Button from 'utils/Button'

export default function CreateGenres() {
  const history = useHistory()

  return (
    <>
      <h3>Create Genres</h3>
      <Button
        onClick={() =>
          // saving in db
          history.push('/genres')
        }
      >
        Save changes
      </Button>
    </>
  )
}
