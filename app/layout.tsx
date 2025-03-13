import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Heebo } from "next/font/google";
import { Assistant } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew"],
  display: "swap",
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "הדרכת הורים | עמית אללוף",
  description: "הדרכת הורים מקצועית עם עמית אללוף",
  openGraph: {
    title: "הדרכת הורים | עמית אללוף",
    description: "הדרכת הורים מקצועית עם עמית אללוף",
    locale: "he_IL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        suppressHydrationWarning
        className={`${heebo.className} ${heebo.variable} antialiased rtl`}
      >
        {children}
      </body>
    </html>
  );
}
