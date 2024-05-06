import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeWithBogo - Gourav Chatterjee",
  description: "Code with Bogo - Gourav Chatterjee Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <ThemeProvider>
        <body className={inter.className}>
          <div className="relative w-full flex items-center justify-center ">
            <Navbar />
          </div>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
