"use client";

import { ThemeProvider } from "next-themes";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AfterEcon",
  description: "John Vandivier's blog on economics and more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
