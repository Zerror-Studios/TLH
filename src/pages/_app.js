import PageTransition from "@/components/common/PageTransition";
import Layout from "@/components/Layout";
import LenisScroll from "@/components/LenisScroll";
import "@/styles/globals.css";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";

import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // give page transition + Lenis time to settle
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 600);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://wa-widget.pointofconnect.com/widget.js"]'
    );

    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://wa-widget.pointofconnect.com/widget.js";
      script.setAttribute(
        "widget-id",
        "818ffed4-ddff-435c-bd6c-c055055ea0c9"
      );
      script.async = true;

      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* Google Ads / Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17387356943"
        strategy="afterInteractive"
      />

      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17387356943');
        `}
      </Script>

      <LenisScroll>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="dark"
          transition={Zoom}
        />

        <Layout>
          <PageTransition>
            <Component {...pageProps} />
          </PageTransition>
        </Layout>
      </LenisScroll>
    </>
  );
}