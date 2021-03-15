import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
function FormikContainer() {
  const genderList = [
    { key: "Select an option", value: ""},
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
    { key: "Other", value: "other" },
  ];
  const initialValues = { email: "", description: "", gender: "" };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is Required.")
      .email("Invalid Email Format."),
    description: Yup.string().required("Description is Required."),
    gender: Yup.string().required("Please Select your Gender."),
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
              type="email" // For Tailwind css form plugin to trigger
              label="Email"
              name="email"
            />
            <FormikControl
              type="select"
              control="select"
              label="Gender"
              name="gender"
              options={genderList}
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
