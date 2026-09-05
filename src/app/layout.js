import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Bodoni_Moda } from "next/font/google";
import AOSProvider from "@/components/AOSProvider";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Kimberly Sinaguinan | Portfolio",
  description:
    "Graphic Artist and UI/UX Designer creating bold visuals and meaningful digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${bodoniModa.variable}`}
    >
      <body>
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}