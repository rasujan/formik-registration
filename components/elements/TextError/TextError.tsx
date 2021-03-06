import React from "react";

/**
 *
 *
 * @param {*} props
 * @return {*} TextError Component to display errors in the form fields
 */
function TextError(props) {
  return (
    <>
      <div className="my-2 px-2 py-2 block rounded-lg bg-red-100 text-red-600">
        {props.children}
      </div>
    </>
  );
}

export default TextError;
