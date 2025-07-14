"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useEffect, useState } from "react";
import OfferPopup from "@/components/layout/OfferPopup";
import { metadata } from "@/components/data/aboutData";
import { OfferPopupProvider } from "@/contexts/OfferPopupContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Show the popup only once per session
    const hasSeenPopup = sessionStorage.getItem('hasSeenOfferPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsPopupOpen(true);
        sessionStorage.setItem('hasSeenOfferPopup', 'true');
      }, 6000); // Show popup after 3 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black`}
      >
        <OfferPopupProvider>
          <Header />
          {children}
          <Footer />
        </OfferPopupProvider>
      </body>
    </html>
  );
}
