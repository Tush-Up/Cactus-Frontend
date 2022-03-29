import React from "react";
import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { Heading, VStack } from "@chakra-ui/layout";
import { useFormik } from "formik";

const Signup = () => {
  return (
      <VStack>
          <Heading>Register a free account</Heading>
          <p>Securely log into your cactus account</p>
      </VStack>
  )
};

export default Signup;
