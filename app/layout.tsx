import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import SideNav, { SideNavItemProps } from "@/components/navigation/sidenav";

import { cn } from "@/lib/utils";

import "./globals.css";
import MobileSideBar from "@/components/navigation/collapsesidebar";

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

  const sideNavItemInfo: SideNavItemProps[] = [
    {
      name: "art",
      href: "/"
    },
    {
      name: "models",
      href: "/models"
    },
    {
      name: "projects",
      href: "/projects"
    },
    {
      name: "about",
      href: "/about"
    },
  ]

  // TODO: Consider combining SideNav and MobileSideBar into one component
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/acz6mdi.css" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased mx-50 flex",
          fontSans.variable
        )} >
        <SideNav className="w-1/6 hidden md:block" sideNavItemInfo={sideNavItemInfo} />
        <MobileSideBar className="w-1/12 block md:hidden align-top justify-top" sideNavItemInfo={sideNavItemInfo} />
        <div className="w-full md:w-5/6">
          {children}
        </div>
      </body>
    </html >
  );
}
