import "../styles/globals.css";
import "../styles/datepicker.scss"
import Theme from "../styles/Theme"
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import React from "react";



const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  );
};
export default MyApp;