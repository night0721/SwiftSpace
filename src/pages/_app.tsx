import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// const Layout = ({ Component, pageProps, router }: AppProps) => {
//   if (Component.getLayout) {
//     return Component.getLayout(<Component {...pageProps} />);
//   } else {
//     return <Component {...pageProps} />;
//   }
// };
