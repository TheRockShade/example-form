import Header from "@/components/Header";
import { CssBaseline, ScopedCssBaseline } from "@mui/material";
import Head from "next/head";

interface BasicLayoutProps {
  children: JSX.Element;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Form Example</title>
      </Head>
      <CssBaseline />
      <Header />
      {children}
    </>
  );
};

export default BasicLayout;
