import React, { forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage, Field } from "formik";
import TextError from "../../TextError/TextError";

//Importing custom Css
import "./datepicker.module.css";
/**
 *
 *
 * @param {*} props
 * @return {*} Datepicker Component which is using React-DatePicker Package
 */
function DatePicker(props) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <div className="my-3 mx-3">
        <label htmlFor={name} className="block mx-2 my-2">
          {label}
        </label>
        <Field id={name} name={name}>
          {({ field, form }) => {
            const { setFieldValue } = form;
            const { value } = field;
            return (
              <div className="wrapper">
                <ReactDatePicker
                  id={name}
                  {...field}
                  {...rest}
                  className="react-datepicker__input-container relative block w-full px-2 py-2 border rounded-lg  border-gray-800 placeholder-gray-600 text-grey-600 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 focus:z-10 sm:text-sm"
                  selected={value}
                  onChange={(val) => setFieldValue(name, val)}
                />
              </div>
            );
          }}
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </div>
  );
}

export default DatePicker;
