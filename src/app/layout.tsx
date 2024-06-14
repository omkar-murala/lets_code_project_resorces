import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
      <Script  id="G-Q0QC4R4RC9" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-Q0QC4R4RC9`}/>
          <Script 
          id="google-analytics"       
      >{
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Q0QC4R4RC9');
      `
      }
      </Script>
      <Script strategy="lazyOnload" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8907718595878644" crossOrigin="anonymous"/>
          <Navbar />
          {children}
          <Footer />

      </body>
    </html>
    </ClerkProvider>
  );
}
