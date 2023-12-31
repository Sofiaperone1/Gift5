import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApiProvider } from "../../context/apiContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Staking Origen",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApiProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ApiProvider>
  );
}
