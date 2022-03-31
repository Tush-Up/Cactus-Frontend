import React, { useState, useEffect } from "react";
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
        <div>
          <h1>Email verified succesfully</h1>
          <Link to="/login">
            <Button type="submit" variant="solid" colorScheme="blackAlpha">
              Log in
            </Button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </>
  );
};

export default VerifyEmail;
