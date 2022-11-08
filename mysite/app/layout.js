/* eslint-disable @next/next/no-head-element */

import "../styles/globals.css";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>John Murray</title>
      </head>
      <body>
        <main>
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
