import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/065b695a90.js"
        crossOrigin="anonymous"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
