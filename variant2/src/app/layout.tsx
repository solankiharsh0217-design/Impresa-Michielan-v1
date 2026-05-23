import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Impresa Edile Michielan | Scorzè, Venezia",
  description: "Impresa Edile Michielan - Oltre 30 anni di esperienza in restauri, isolamenti, rifacimento tetti e ristrutturazioni complete a Scorzè, Venezia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
