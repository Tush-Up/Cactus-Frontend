import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-calendar/dist/Calendar.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./auth-context";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#B38B59",
      200: "rgba(33, 33, 33, 0.32)",
      300: "#212121",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
