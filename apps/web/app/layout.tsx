"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-width">
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
