import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon.png" />
        <link rel="shortcut icon" href="/icon.png" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="title" content="SwiftSpace" />
        <meta name="theme-color" content="#0c4a6e" data-react-helmet="true" />
        <meta name="msapplication-TileColor" content="#9e85ff" />
        <meta name="description" content="SwiftSpace" />
        <meta name="keywords" content="chat, app, pwa, friends, space" />
        <meta name="language" content="English" />
        <meta name="author" content="SwiftSpace" />
        <meta itemProp="name" content="SwiftSpace" />
        <meta
          itemProp="description"
          content="SwiftSpace is a modern chat app for gamers"
        />
        <meta
          itemProp="image"
          content="https://raw.githubusercontent.com/night0721/SwiftSpace/main/public/icon-192x192.png"
        />
        <meta name="application-name" content="SwiftSpace" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SwiftSpace" />
        <meta
          name="description"
          content="SwiftSpace is a modern chat app for gamers"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#0c4a6e" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#0c4a6e" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="mask-icon" href="/icon.png" color="#0c4a6e" />
        <meta property="og:url" content="https://swiftspace.night0721.me" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SwiftSpace" />
        <meta property="og:site_name" content="SwiftSpace" />
        <meta
          property="og:description"
          content="SwiftSpace is a modern chat app for gamers"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/night0721/SwiftSpace/main/public/icon-192x192.png"
        />{" "}
        <meta name="twitter:creator" content="night0721" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SwiftSpace" />{" "}
        <meta name="twitter:url" content="https://swiftsapce.night0721.me" />
        <meta
          name="twitter:description"
          content="SwiftSpace is a modern chat app for gamers"
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/night0721/SwiftSpace/main/public/icon-192x192.png"
        />
        <meta
          name="twitter:image:src"
          content="https://raw.githubusercontent.com/night0721/SwiftSpace/main/public/icon-192x192.png"
        />
        <meta content="video.other" property="og:type" />
        <meta content="image/gif" property="og:image:type" />
        <link type="application/json+oembed" href="/oembed.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
