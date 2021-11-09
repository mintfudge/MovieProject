import { Form, Formik, FormikHelpers } from "formik";
import DateField from "Forms/DateField";
import ImageField from "Forms/ImageField";
import MarkdownField from "Forms/MarkdownField";
import TextField from "Forms/TextField";
import { Link } from "react-router-dom";
import Button from "utils/Button";
import * as Yup from 'yup';
import { actorsCreationDTO } from "./actors.model";


export default function ActorsForm(props: actorFormProps) {
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstLetterUppercase(),
                dateOfBirth: Yup.date().nullable().required('This field is required')
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField displayName="Name" field="name" />
                    <DateField displayName="Date of Birth" field="dateOfBirth" />
                    <ImageField displayName="Picture" field="picture" 
                    imageURL={props.model.pictureURL} />
                    <MarkdownField displayName="Biography" field="biography" />

                    <Button disabled={formikProps.isSubmitting}
                        type="submit"
                    >Save Changes</Button>
                    <Link to="/actors" className="btn btn-secondary">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface actorFormProps {
    model: actorsCreationDTO;
    onSubmit(values: actorsCreationDTO, action: FormikHelpers<actorsCreationDTO>): void;
}