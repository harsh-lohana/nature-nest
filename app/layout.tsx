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
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
  FooterBrand,
} from "flowbite-react";
import Link from "next/link";
import Head from "next/head";
import { IoLeafSharp } from "react-icons/io5";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

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
              <Button className="hidden md:inline bg-white border-black border-2 text-black hover:bg-black hover:border-none hover:text-white">
                Sign in
              </Button>
              <Button className="hidden md:inline bg-white border-black border-2 text-black hover:bg-black hover:border-none hover:text-white">
                Sign up
              </Button>
              <NavbarToggle />
            </div>
            <NavbarCollapse className="flex flex-col gap-3 justify-center">
              <NavbarLink href="#" active className="text-lg font-light">
                Home
              </NavbarLink>
              <NavbarLink href="#" className="text-lg font-light">
                About
              </NavbarLink>
              <NavbarLink href="#" className="text-lg font-light">
                Contact
              </NavbarLink>
              <div className="flex flex-col gap-3">
                <Button className="md:hidden bg-white border-black border-2 text-black hover:bg-black hover:border-none hover:text-white w-full">
                  Sign in
                </Button>
                <Button className="md:hidden bg-white border-black border-2 text-black hover:bg-black hover:border-none hover:text-white w-full">
                  Sign up
                </Button>
              </div>
            </NavbarCollapse>
          </Navbar>
          {children}
          <Footer bgDark className="rounded-none">
            <div className="w-full">
              <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                <div className="bg-transparent justify-center items-center gap-4 hidden md:flex">
                  <IoLeafSharp className="text-white size-10" />
                  <p className="text-2xl md:text-3xl text-white text-center">
                    Nature India
                  </p>
                </div>
                <div>
                  <FooterTitle title="Company" />
                  <FooterLinkGroup col>
                    <FooterLink href="#">About</FooterLink>
                    <FooterLink href="#">Contact Us</FooterLink>
                  </FooterLinkGroup>
                </div>
                <div>
                  <FooterTitle title="help center" />
                  <FooterLinkGroup col>
                    <FooterLink href="#">Discord Server</FooterLink>
                    <FooterLink href="#">Twitter</FooterLink>
                    <FooterLink href="#">Facebook</FooterLink>
                    <FooterLink href="#">Contact Us</FooterLink>
                  </FooterLinkGroup>
                </div>
                <div>
                  <FooterTitle title="legal" />
                  <FooterLinkGroup col>
                    <FooterLink href="#">Privacy Policy</FooterLink>
                    <FooterLink href="#">Licensing</FooterLink>
                    <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                  </FooterLinkGroup>
                </div>
              </div>
              <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                <FooterCopyright href="#" by="Nature India™" year={2024} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                  <FooterIcon href="#" icon={FaFacebookSquare} />
                  <FooterIcon href="#" icon={FaInstagram} />
                  <FooterIcon href="#" icon={FaXTwitter} />
                  <FooterIcon href="#" icon={FaGithub} />
                </div>
              </div>
            </div>
          </Footer>
        </div>
      </body>
    </html>
  );
}
