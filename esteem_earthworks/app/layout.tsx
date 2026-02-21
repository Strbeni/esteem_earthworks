import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
