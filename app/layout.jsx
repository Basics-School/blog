"use client";
import { SessionProvider } from "next-auth/react"
import Header from "../components/Header";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
export default function RootLayout({ children,session }) {
  return (
    <html>
      <head></head>
      <body>
        <SessionProvider session={session}>

        <ThemeProvider attribute='class'>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
        </SessionProvider >
      </body>
    </html>
  );
}
