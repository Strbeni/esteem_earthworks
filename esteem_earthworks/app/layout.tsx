import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Esteem Earthworks | Precision and Reliability Defined",
  description: "Building Dreams, Creating Reality with precision and quality in construction projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-inter overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
