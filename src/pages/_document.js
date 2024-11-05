import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
