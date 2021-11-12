import { Form, Formik, FormikHelpers } from 'formik'
import TextField from 'Forms/TextField'
import { Link } from 'react-router-dom'
import Button from 'utils/Button'
import * as Yup from 'yup'
import { genreCriationDTO } from './genres.model'

export default function GenreForm(props: genreFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('This field is required')
          .firstLetterUppercase()
      })}
    >
      {formikProps => (
        <Form>
          <TextField field="name" displayName="Name" />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Save changes
          </Button>
          <Link className="btn btn-secudary" to="/genres">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  )
}

interface genreFormProps {
  model: genreCriationDTO
  onSubmit(
    values: genreCriationDTO,
    action: FormikHelpers<genreCriationDTO>
  ): void
}
