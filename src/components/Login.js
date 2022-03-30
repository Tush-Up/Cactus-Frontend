import { Button, Heading, VStack, Text } from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().required("Email is required"),
        password: Yup.string()
          .required("Password is required")
          .min(7, "Password is too short"),
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack
          as="form"
          onSubmit={formik.handleSubmit}
        >
          <Heading as="h1" size="lg">
            Log in to your account
          </Heading>
          <Text fontSize="md">Securely log into your cactus account</Text>

          <InputField
            label="Email Address"
            name="email"
            type="email"
            placeholder="enter email"
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />

          <Button
            width="100%"
            type="submit"
            variant="solid"
            colorScheme="blackAlpha"
          >
            Log In
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default Login;
