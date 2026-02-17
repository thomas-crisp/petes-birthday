import type { Metadata } from "next";
import { Caveat, Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dear Pete... | Happy 24th Birthday",
  description:
    "A letter to my brother, twenty-four years of memories, mischief, and love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${caveat.variable} ${playfair.variable} ${ibmMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
