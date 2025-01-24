import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Next.js + TailwindCSS ",
  description: "Next.js + TailwindCSS",
};

const geistSans = localFont({
  src: "./fonts/DINCondensedBold.ttf",
  variable: "--font-din-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/HelveticaNeue.ttf",
  variable: "--font-helvtica-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
