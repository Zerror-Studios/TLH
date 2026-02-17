import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { usePathname } from "next/navigation";
import BookNowDrawer from "./common/BookNowDrawer";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Layout = ({ children }) => {
  const pathname = usePathname();

    useGSAP(() => {
    gsap.to(".whatsapp_chat", {
      opacity: 1,
      delay: 2,
      stagger: 0.1,
      duration: 1,
      ease: "ease-secondary"
    })
  })

  return (
    <>
      <BookNowDrawer />
      <Link target="_blank" href="https://wa.me/918800020002">
        <div className="whatsapp_chat">
          <div className="whatsapp_chat_img center">
            <Image height={5} width={5} className="cover" src="/gifs/whatsapp.gif" alt="loading"/>
          </div>
          <p className="font-semibold ">CHAT</p>
        </div>
      </Link>
      <header>
        <Header />
      </header>
      <main>{children}</main>
        <footer>
          <Footer />
        </footer>
    </>
  );
};

export default Layout;
