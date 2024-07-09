"use client";

import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ClientWrapper from "@/components/ClientWrapper";
import "@/../src/css/animate.css";
import "@/../src/css/style.css";
import ScrollToTop from "@/components/ScrollToTop";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "next-themes";
import PreLoader from "@/components/PreLoader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextTopLoader
          color="#006BFF"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
        />

        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <ClientWrapper>
            {loading ? (
              <PreLoader />
            ) : (
              <>
                <Header />
                {children}
                <ScrollToTop />
              </>
            )}
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
