import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import ReactQueryProviders from "@/provider/ReactQueryProvider";
import StoreProvider from "@/provider/StoreProvider";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Kon Blog",
   description:
      "Where ideas brew and stories unfold. Explore a world of creativity, insights, and innovation, all served fresh with a blend of passion and a dash of inspiration.",
   openGraph: {
      images: "/icon2.png",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bekgron  min-h-screen`}
         >
            <StoreProvider>
               <Navbar />
               <ReactQueryProviders>{children}</ReactQueryProviders>
            </StoreProvider>
         </body>
      </html>
   );
}
