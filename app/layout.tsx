import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import Footer from "@/components/layout/Footer";
import SideBar from "@/components/layout/SideBar";
import Header from "@/components/layout/Header/Header";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <Toaster />
          <Grid
            as={Container}
            maxW={"container.xl"}
            mx={"auto"}
            w={"full"}
            templateColumns={{ base: "1fr", lg: "3fr 1fr" }}
            gap={4}
          >
            <GridItem>
              <Header />
              {children}
              <Footer />
            </GridItem>
            <GridItem hideBelow={"lg"}>
              <SideBar />
            </GridItem>
          </Grid>
        </Provider>
      </body>
    </html>
  );
}
