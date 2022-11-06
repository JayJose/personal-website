/* eslint-disable @next/next/no-head-element */

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <main>
          <nav></nav>
          {children}
        </main>
        <footer>Greetings from the footer</footer>
      </body>
    </html>
  );
}
