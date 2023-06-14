import type { AppProps } from "next/app";
import BasicLayout from "@/layouts/BasicLayout";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <BasicLayout>
          <Container>
            <Component {...pageProps} />
          </Container>
        </BasicLayout>
      </ThemeProvider>
    </Provider>
  );
}
