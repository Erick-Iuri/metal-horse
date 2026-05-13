import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
/* Importa o tailwind */
import "./global.css";

/* Fonts para o site */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Titulo da página */
export const metadata: Metadata = {
  title: "Metal Horse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
