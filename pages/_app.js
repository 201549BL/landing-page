import Head from "next/head";
import { ThemeProvider } from "styled-components";
import NotificationsContextProvider from "../components/contexts/NotificationsContext";
import Layout from "../components/layout";
import { GlobalStyles } from "../styles/globalStyles";
import { theme } from "../styles/themes/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NotificationsContextProvider>
          <Layout>
            <GlobalStyles />
            <Component {...pageProps} />
          </Layout>
        </NotificationsContextProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
