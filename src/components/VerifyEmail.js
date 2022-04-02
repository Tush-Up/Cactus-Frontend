import React, { useState, useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import axios from "../api/axios";

const VerifyEmail = () => {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const verifyUrl = `/verify-email?token=${param.token}`;
        const { data } = await axios.get(verifyUrl);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <>
      {validUrl ? (
        <div
          style={{ height: "100vh" }}
          className="flex flex-col items-center justify-center"
        >
          <AiFillCheckCircle className="text-green-600 text-9xl" />
          <h1 className="text-3xl m-10">Email verified succesfully</h1>
          <Link to="/login">
            <Button
              type="submit"
              variant="solid"
              color="#ffffff"
              bg="brand.100"
            >
              Log in
            </Button>
          </Link>
        </div>
      ) : (
        <div
          style={{ height: "100vh" }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl">404 Page not found</h1>
        </div>
      )}
    </>
  );
};

export default VerifyEmail;
