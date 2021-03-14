import React from "react";
import InputField from "./elements/formik-elements/InputField/InputField";
import Select from "./elements/formik-elements/Select/Select";
import TextArea from "./elements/formik-elements/TextArea/TextArea";

function FormikControl(props) {
  const { control, ...rest } = props;
  /*  

  *Note
  Using Switch Cases to render the element based on control
  Six major element 
  "...rest" is all the remaining props required by the element (i.e name , id, class, etc)
  Eg: We call FormikControl in the FormikControl as pass control ="input" to render input field element
  
  */
  switch (control) {
    case "input":
      return <InputField {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
}

export default FormikControl;
