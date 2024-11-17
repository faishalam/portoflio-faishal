import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import CardPinComponents from "@/components/templates/CardPinComponents";
import { BackgroundBeamsDemo } from "@/components/templates/BackgroundBeamsComponents";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faishal Portfolio",
  description: "Faishal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-full w-full min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
