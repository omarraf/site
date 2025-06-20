import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatedLayout } from "./components/AnimatedLayout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omar's Portfolio",
  description: "Made by Omar Rafiq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedLayout>
          {children}
        </AnimatedLayout>
      </body>
    </html>
  );
}
