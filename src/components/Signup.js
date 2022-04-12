import { Button, Heading, VStack, Text } from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import axios from "../api/axios";

const Signup = ({ setSuccessMsg, setErrorMsg }) => {
  const REGISTER_URL = "/register";
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        bankName: "",
        accountNumber: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Name is required")
          .min(6, "Name is too short"),
        email: Yup.string()
          .required("Email is required")
          .email("Invalid email"),
        phone: Yup.number()
          .required("Phone number is required")
          .integer()
          .min(8, "Number is too short")
          .typeError("Please enter a valid phone number"),
        bankName: Yup.string().required("Bank is required"),
        accountNumber: Yup.number()
          .integer()
          .required("Account number is required")
          .min(9, "Account number is too short"),
        salary: Yup.number()
          .integer()
          .required("Salary is required")
          .min(6, "N100,000 minimum salary required"),
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password must contain atleast 8 characters"),
        confirmPassword: Yup.string()
          .required("Password is required")
          .min(8, "Password must contain atleast 8 characters")
          .oneOf([Yup.ref("password"), null], "Passwords do not match"),
      })}
      onSubmit={async (values, actions) => {
        delete values.confirmPassword;

        const data = {
          ...values,
          phone: values.phone.toString(),
          accountNumber: values.accountNumber.toString(),
          salary: values.salary.toString(),
        };
        console.log(data);

        try {
          const response = await axios.post(REGISTER_URL, data, {
            headers: { "Content-Type": "application/json" },
          });

          console.log(response.data);
          setSuccessMsg(
            "Email verification sent! Please verify your email to complete registration."
          );
          setTimeout(() => {
            setSuccessMsg("");
          }, 7000);
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
        <VStack
          as="form"
          justifyContent="center"
          onSubmit={formik.handleSubmit}
        >
          <Heading color="brand.100" as="h1" size="lg">
            Register a free account
          </Heading>
          <Text pb="20px" color="brand.200" fontSize="md">
            Securely log into your cactus account
          </Text>

          <InputField label="Full Name" name="name" placeholder="enter name" />

          <InputField
            label="Email Address"
            name="email"
            type="email"
            placeholder="enter email"
          />

          <InputField
            label="Phone Number"
            name="phone"
            type="number"
            placeholder="enter phone number"
          />

          <InputField
            label="Bank Name"
            name="bankName"
            type="text"
            placeholder="enter bank name"
          />

          {/* <FormControl
            isInvalid={formik.errors.bankName && formik.touched.bankName}
          >
            <FormLabel>Bank Name</FormLabel>
            <Select
              name="bankName"
              placeholder="Select bank"
              {...formik.getFieldProps("bankName")}
            >
              <option value="option1">Kuda</option>
              <option value="option2">First Bank</option>
              <option value="option3">Union Bank</option>
            </Select>
            <FormErrorMessage>{formik.errors.bankName}</FormErrorMessage>
          </FormControl> */}

          <InputField
            label="Account Number"
            name="accountNumber"
            type="number"
            placeholder="Account number"
          />

          <InputField
            label="Salary"
            name="salary"
            type="number"
            placeholder="Salary"
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />

          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            mb="20px"
          />

          <Button
            width="100%"
            type="submit"
            variant="solid"
            color="#ffffff"
            bg="brand.100"
          >
            Register
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default Signup;
