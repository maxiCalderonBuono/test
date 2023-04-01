import Head from "next/head";

import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const name = "Maxi Calderón";
export const siteTitle = "Maxi Calderón";

export default function Layout({ children, home }) {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  useEffect(() => {
    const systemColorPreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else {
      setDarkMode(systemColorPreference);
    }
  }, []);

  return (
    <section
      className={` scrollbar-track-[#372C43] scrollbar-thumb-blue-500 scrollbar  ${
        darkMode ? "dark bg-[#0E001C] " : "bg-slate-200"
      }`}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Maxi Calderón Dev." />
        <meta property="og:title" content="Maxi Calderón Frontend Developer" />
        <meta property="og:site_name" content="maxicalderon.dev" />
        <meta property="og:url" content="maxicalderon.dev" />
        <meta
          property="og:description"
          content="Maxi Calderon's website, is a platform that showcases the work and portfolio of Maxi Calderon, a frontend web developer."
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dvqlenul5/image/upload/v1680372841/web-image_en5x24.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Maxi calderon's website thumbnail"
        />
        <meta property="og:whatsapp" content="true" />
        <meta name="twitter:title" content="Maxi Calderón Frontend Developer" />
        <meta
          name="twitter:description"
          content="Maxi Calderon's website, is a platform that showcases the work and portfolio of Maxi Calderon, a frontend web developer."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dvqlenul5/image/upload/v1680372841/web-image_en5x24.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar setter={handleThemeMode} />
      <main>{children}</main>
    </section>
  );
}
