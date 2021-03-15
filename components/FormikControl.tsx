import React from "react";
import CheckBox from "./elements/formik-elements/CheckBox/CheckBox";
import DatePicker from "./elements/formik-elements/DatePicker/DatePicker";
import InputField from "./elements/formik-elements/InputField/InputField";
import RadioButtons from "./elements/formik-elements/RadioButtons/RadioButtons";
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
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
