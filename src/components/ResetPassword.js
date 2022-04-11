import { Button, Heading, VStack, Text } from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import axios from "../api/axios";

const ResetPassword = ({ setSuccessMsg, setErrorMsg }) => {
  const RESET_URL = "/reset-password";

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required("Email is required")
          .email("Invalid email"),
      })}
      onSubmit={async (values, actions) => {
        try {
          const response = await axios.post(RESET_URL, values, {
            headers: { "Content-Type": "application/json" },
          });
          console.log(response.data);
          setSuccessMsg("Link to reset password sent to email address!");
          setTimeout(() => {
            setSuccessMsg("");
          }, 3000);
        } catch (error) {
          if (error.response) {
            setErrorMsg(error.response.data);
            setTimeout(() => {
              setErrorMsg("");
            }, 7000);
          }
        }
        actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack as="form" onSubmit={formik.handleSubmit}>
          <Heading color="brand.100" as="h1" size="lg">
            Reset Password
          </Heading>
          <Text pb="20px" color="brand.200" fontSize="md">
            Enter registered email to reset password
          </Text>

          <InputField
            label="Email Address"
            name="email"
            type="email"
            placeholder="enter email"
          />

          <Button
            width="100%"
            type="submit"
            variant="solid"
            bg="brand.100"
            color="#ffffff"
          >
            Reset Password
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default ResetPassword;
