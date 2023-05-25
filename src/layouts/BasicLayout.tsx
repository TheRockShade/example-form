import Header from "@/components/Header";
import GlobalStyle from "@/styles/GlobalStyle";
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
			<GlobalStyle />
      <Header />
      {children}
    </>
  );
};

export default BasicLayout;
