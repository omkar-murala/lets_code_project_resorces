import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/NavBar";
import { Footer } from "@/components/Footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resource Listing",
  description: "Resource Listing ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <meta name="google-adsense-account" content="ca-pub-8907718595878644"></meta>
      <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
          <Script  id="G-Q0QC4R4RC9" async src="https://www.googletagmanager.com/gtag/js?id=G-Q0QC4R4RC9"></Script>
          <Script 
           id="google-analytics"
          dangerouslySetInnerHTML={{
            __html:`
             window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Q0QC4R4RC9');
            `
          }}
          
></Script>
<Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8907718595878644" crossOrigin="anonymous"></Script>


      </body>
    </html>
    </ClerkProvider>
  );
}
