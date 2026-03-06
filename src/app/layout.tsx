import type { Metadata } from "next";
import { Manrope, Petit_Formal_Script } from "next/font/google";
import "./globals.css";

const cormorant = Petit_Formal_Script({
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
      <body className={`${cormorant.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
