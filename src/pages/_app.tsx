import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      {/* <Component {...pageProps} /> */}
        <Layout Component={Component} pageProps={pageProps} router={router} />
    </>
  );
}

// Define an interface that extends the Component type
interface ExtendedComponent extends React.FC<AppProps> {
  getLayout?: (page: JSX.Element) => JSX.Element;
}

const Layout = ({ Component, pageProps }: AppProps) => {
  // Use the ExtendedComponent type here
  const ExtendedComponent = Component as ExtendedComponent;

  if (ExtendedComponent.getLayout) {
    return ExtendedComponent.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};
