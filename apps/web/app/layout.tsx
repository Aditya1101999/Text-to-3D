"use client"
import "./globals.css";
import { Poppins } from "next/font/google";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,session
}: {
  children: React.ReactNode;
  session:  Session | null;
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='max-width'>
          <SessionProvider session={session}>
          {children}
          </SessionProvider>
          </div>
      </body>
    </html>
  );
}
