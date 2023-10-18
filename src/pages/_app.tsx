import "@/styles/globals.css";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from "next/head";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Layout Component={Component} pageProps={pageProps} />
    </>
  );
}

// Define an interface that extends the Component type
//interface ExtendedComponent extends React.FC<AppProps> {
//  getLayout?: (page: JSX.Element) => JSX.Element;
//}

const Layout = ({ Component, pageProps }: AppPropsWithLayout) => {
   // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
 
  return getLayout(<Component {...pageProps} />)
};

 
 
//export default function App({ Component, pageProps }: AppPropsWithLayout) {
//  // Use the layout defined at the page level, if available
//  const getLayout = Component.getLayout ?? ((page) => page)
// 
//  return getLayout(<Component {...pageProps} />)
//}
