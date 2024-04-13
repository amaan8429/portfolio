import type { Metadata } from "next";
import { Lexend as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <div className="min-h-screen flex flex-col md:w-[45rem] md:p-10 p-2">
            <Nav />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
