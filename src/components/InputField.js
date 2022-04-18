import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field, useField } from "formik";

const InputField = ({ fieldType, label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControl pb="10px" isInvalid={meta.error && meta.touched}>
      <FormLabel>{label}</FormLabel>
      <Field as={fieldType} {...field} {...props} focusBorderColor="brand.100" />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
