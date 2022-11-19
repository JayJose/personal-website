/* eslint-disable @next/next/no-head-element */
import "../styles/globals.css";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout({ children }) {
  const title = process.env.TITLE;

  return (
    <html>
      <head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Navbar />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
