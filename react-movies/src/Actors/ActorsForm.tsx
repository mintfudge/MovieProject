import { Form, Formik, FormikHelpers } from "formik";
import TextField from "Forms/TextField";
import { Link } from "react-router-dom";
import Button from "utils/Button";
import { actorsCreationDTO } from "./actors.model";
import * as Yup from "yup";
import DateField from "Forms/DateField";

export function ActorsForm(props: actorsFormProps) {
return (
    <Formik
    initialValues={props.model}
    onSubmit={props.onSubmit}
    validationSchema={Yup.object({
        name: Yup.string()
        .required("This field is required")
        .firstLetterUppercase(),
        dateOfBirth: Yup.date()
        .nullable()
        .required("This field is required"),
    })}
    >
    {(formikProps) => (
        <Form>
        <TextField displayName="Name" field="name" />
        <DateField displayName="Date of Birth" field="dateOfBirth" />

        <Button disabled={formikProps.isSubmitting} type="submit">
            Save Changes
        </Button>

        <Link to="/actors" className="btn btn-secundary">
            Cancel
        </Link>
        </Form>
    )}
    </Formik>
);
}

interface actorsFormProps {
model: actorsCreationDTO;
onSubmit(
    values: actorsCreationDTO,
    action: FormikHelpers<actorsCreationDTO>
): void;
}
