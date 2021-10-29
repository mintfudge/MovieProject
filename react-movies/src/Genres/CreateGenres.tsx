import { ErrorMessage, Field, Form, Formik } from 'formik'
import TextField from 'Forms/TextField'
import { Link } from 'react-router-dom'
import Button from 'utils/Button'
import * as Yup from 'yup'

export default function CreateGenres() {
  //const history = useHistory()

  return (
    <>
      <h3>Create Genres</h3>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={value => {
          console.log(value)
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('This field is required')
        })}
      >
        <Form>
          <TextField field="name" displayName="Name" />

          <Button type="submit">Save changes</Button>
          <Link className="btn btn-secudary" to="/genres">
            Cancel
          </Link>
        </Form>
      </Formik>
    </>
  )
}
