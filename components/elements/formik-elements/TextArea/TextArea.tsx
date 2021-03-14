import React from "react";
import { Field, ErrorMessage } from "formik";

function InputField(props) {
  const { label, name, ...rest } = props;

  return (
    <div>
      <div className="my-3 mx-3">
        <label htmlFor={name} className="block mx-2 my-2">
          {label}
        </label>
        <Field
          id={name}
          as="textarea"
          name={name}
          className="relative block w-full px-2 py-2 border rounded-lg  border-gray-800 placeholder-gray-500 text-grey-600 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 focus:z-10 sm:text-sm"
          {...rest}
        />
        <ErrorMessage
          name={name}
          render={(msg) => (
            <div className="my-2 px-2 py-2 block rounded-lg bg-red-100 text-red-600">
              {msg}
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default InputField;
