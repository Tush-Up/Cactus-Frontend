import React from 'react'
import { Alert, AlertIcon } from "@chakra-ui/react";

const Notif = ({ successMsg, errorMsg }) => {
  return (
    <div
      className={
        successMsg || errorMsg
          ? "fixed top-2 right-2 block"
          : "fixed top-2 right-2 hidden"
      }
    >
      <Alert status={successMsg ? "success" : "error"}>
        <AlertIcon />
        {successMsg}
        {errorMsg}
      </Alert>
    </div>
  );
};

export default Notif