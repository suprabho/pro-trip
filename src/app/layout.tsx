import type { Metadata } from "next";
import { Manrope, Petit_Formal_Script, Space_Mono } from "next/font/google";
import "./globals.css";

const petit = Petit_Formal_Script({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const dmSans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "protrip — Travel Planner",
  description: "Plan, organize, and explore your travel itineraries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${petit.variable} ${dmSans.variable} ${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
