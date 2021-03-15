import React from "react";
import { Formik, Form, FormikContext } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
function FormikContainer() {
  const genderList = [
    { key: "Select an option", value: "" },
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
    { key: "Other", value: "other" },
  ];
  const marriageStatusList = [
    { key: "Single", value: "single" },
    { key: "Married", value: "married" },
    { key: "Divored", value: "divored" },
  ];
  const intrestedFieldsList = [
    { key: "Sciences", value: "science" },
    { key: "IT", value: "IT" },
    { key: "Life Style", value: "life style" },
    { key: "Design", value: "design" },
  ];
  const initialValues = {
    name: "",
    email: "",
    description: "",
    gender: "",
    marriageStatus: "",
    intrestedFields: [],
    dateOfBirth: null,
    dateOfRegistration: null,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Please Enter you Name."),
    email: Yup.string()
      .required("Email is Required.")
      .email("Invalid Email Format."),
    description: Yup.string().required("Description is Required."),
    gender: Yup.string().required("Please Select your Gender."),
    marriageStatus: Yup.string().required(
      "Please Select your Marriage Status."
    ),
    intrestedFields: Yup.array().min(1, "Please Select at least one Field."),
    dateOfBirth: Yup.date().required("Please Enter Your Date Of Birth."),
    dateOfRegistration: Yup.date().required(
      "Please Enter Your Date Of Registration."
    ),
  });
  const onSubmit = (values) => console.log("Form Data", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input" // For Formik
              label="Name"
              name="name"
            />
            <FormikControl
              control="input" // For Formik
              label="Email"
              name="email"
            />
            <FormikControl
              control="radio"
              label="Marriage Status"
              name="marriageStatus"
              options={marriageStatusList}
            />
            <FormikControl
              control="select"
              label="Gender"
              name="gender"
              options={genderList}
            />
            <FormikControl
              control="checkbox"
              label="Intrested Fields"
              name="intrestedFields"
              options={intrestedFieldsList}
            />
            <FormikControl
              control="date"
              label="Date of Birth"
              name="dateOfBirth"
            />
            <FormikControl
              control="date"
              label="Date of Registration"
              name="dateOfRegistration"
            />
            <FormikControl
              type="textarea"
              control="textarea"
              label="Description"
              name="description"
            />
            <div className="my-3 mx-3">
              <button
                type="submit"
                className=" py-2 px-2 block justify-center  w-full   border rounded-lg text-sm  text-white font-medium text-whitem bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-3 focus:ring-offset-2 focus:ring-blue-600"
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
