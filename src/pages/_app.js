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

   useEffect(() => {
    const handleRouteChange = () => {
      window.fbq && window.fbq("track", "PageView");
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>

      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '756441694101905');
            fbq('track', 'PageView');
          `,
        }}
      />
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