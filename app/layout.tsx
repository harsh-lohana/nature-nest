import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import Head from "next/head";
import { IoLeafSharp } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nature India",
  description: "Nature India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen relative">
          <Navbar className="bg-transparent flex equal-spaced">
            <NavbarBrand
              href="/"
              as={Link}
              className="flex items-center gap-3 className='text-l font-lightg'"
            >
              <IoLeafSharp className="text-black size-8" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Nature India
              </span>
            </NavbarBrand>
            <div className="flex md:order-2 gap-x-2">
              <Button className="bg-white border-black border-2 text-black hover:bg-black hover:border-none hover:text-white">
                Sign in
              </Button>
              <Button className="bg-white border-black border-2 text-black hover:bg-black hover:border-none hover:text-white">
                Sign up
              </Button>
              <NavbarToggle />
            </div>
            <NavbarCollapse>
              <NavbarLink href="#" active className="text-lg font-light">
                Home
              </NavbarLink>
              <NavbarLink href="#" className="text-lg font-light">
                About
              </NavbarLink>
              <NavbarLink href="#" className="text-lg font-light">
                Contact
              </NavbarLink>
            </NavbarCollapse>
          </Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
