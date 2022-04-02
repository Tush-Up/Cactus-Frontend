import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Button, Heading, VStack, Text } from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import axios from "../api/axios";

const Login = ({ user, setSuccessMsg, setErrorMsg }) => {
  const LOGIN_URL = "/signIn";
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = localStorage.getItem("cactusUser");
    console.log(getUser?.isLogin);
    if (getUser?.isLogin) {
      navigate("/dashboard");
    }
  }, [navigate]);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required("Email is required")
          .email("Invalid email"),
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password is too short"),
      })}
      onSubmit={async (values, actions) => {
        try {
          const response = await axios.post(LOGIN_URL, values, {
            headers: { "Content-Type": "application/json" },
          });
          console.log(response.data);
          setSuccessMsg("Successfully logged in!");
          setTimeout(() => {
            setSuccessMsg("");
          }, 3000);

          user = {
            email: values.email,
            isLogin: true,
          };

          localStorage.setItem("cactusUser", JSON.stringify(user));

          setTimeout(() => {
            navigate("/dashboard");
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
          <Heading color="Background.100" as="h1" size="lg">
            Log in to your account
          </Heading>
          <Text pb="20px" color="brand.200" fontSize="md">
            Securely log into your cactus account
          </Text>

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
            mb="20px"
          />

          <Button
            width="100%"
            type="submit"
            variant="solid"
            bg="brand.100"
            color="#ffffff"
          >
            Log In
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default Login;
