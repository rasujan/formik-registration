import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../TextError/TextError";

function Select(props) {
  const { label, name, options, ...rest } = props;

  return (
    <div>
      <div className="my-3 mx-3">
        <label htmlFor={name} className="block mx-2 my-2">
          {label}
        </label>
        <Field
          id={name}
          as="select"
          name={name}
          className="relative block w-full px-2 py-2 border rounded-lg  border-gray-800 placeholder-gray-600 text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 focus:z-10 sm:text-sm"
          {...rest}
        >
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {" "}
                {option.key}{" "}
              </option>
            );
          })}
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </div>
  );
}

export default Select;
