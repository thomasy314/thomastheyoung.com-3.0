import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import SideNav from "@/components/navigation/sidenav";

import "./globals.css";
import { sidebarRoutes } from "@/config/navigationconfig";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Thomas the Young",
  description: "Thomas Young Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/acz6mdi.css" />
      </head>
      <body
        className="min-h-screen bg-background font-sans antialiased mx-50 flex font-serif font-semibold">
        <SideNav className="w-1/6" sideNavItemInfo={sidebarRoutes} />
        <div className="w-full md:w-5/6">
          {children}
        </div>
      </body>
    </html >
  );
}
