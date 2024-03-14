import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/themeProvider";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import "@mantine/nprogress/styles.css";
import { MantineProvider } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Draw",
    description: "Design diagrams with ease using our Diagram Designer app.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
              {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
}
