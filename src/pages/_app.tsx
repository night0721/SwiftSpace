import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Layout Component={Component} pageProps={pageProps} />
    </>
  );
}

const Layout = ({ Component, pageProps }: AppProps) => {
   if (Component.getLayout) {
     return Component.getLayout(<Component {...pageProps} />);
   } else {
     return <Component {...pageProps} />;
   }
 };
