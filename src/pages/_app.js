
import { useEffect, useState } from "react";
import Head from 'next/head';
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import Layout from "@/components/layout/Layout";
import ScrollToTop from "react-scroll-to-top";
import AppProvider from "@/context/AppContext";
import 'aos/dist/aos.css';
import "@/styles/css/swiper-bundle.min.css";
import "@/styles/sass/style.scss";



export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  //........... animation.....
  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Head>

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Torkgo Web 3 Metaverse IDO Launchpad React.js (Next.js) Template</title>
        <meta
          name="title"
          content="Torkgo — Web 3 Metaverse   IDO  Launchpad  HTML Template"
        />
        <meta name="description" content="Torkgo Web 3 Metaverse IDO Launchpad Vue.js (Nuxt.js) Template by TheTork. It is suitable for any kind of IDO,IGO,INO and Metaverse Launchpad." />
        <meta name="keywords" content="torkgo, web3, ico ino, nft, blockchain,launchpad,ido launchpad, nft launchpad, crypto launchpad, next js, react js, bootstrap 5" />
        <meta name="author" content="thetork.com" />
        <meta property="og:image" content="../images/Torkgo-next.png" />

      </Head>

      <AppProvider>
        <Layout>
          {loading && (
            <div className="preloader">
              <div className="preloader__inner">
                <div className="preloader__icon">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <Component {...pageProps} />
        </Layout>
        <ScrollToTop
          className="scroll-to-top"
          smooth
          viewBox="0 0 448 512"
          svgPath="M384 352v64c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-64c0-17.67-14.33-32-32-32s-32 14.33-32 32v64c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-64c0-17.67-14.33-32-32-32S384 334.3 384 352zM201.4 9.375l-128 128c-12.51 12.51-12.49 32.76 0 45.25c12.5 12.5 32.75 12.5 45.25 0L192 109.3V320c0 17.69 14.31 32 32 32s32-14.31 32-32V109.3l73.38 73.38c12.5 12.5 32.75 12.5 45.25 0s12.5-32.75 0-45.25l-128-128C234.1-3.125 213.9-3.125 201.4 9.375z"
        />
      </AppProvider>
    </>
  );
}
