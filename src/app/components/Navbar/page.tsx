"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const linkStyles = "hover:text-orange-600 transition-colors duration-200";

  return (
    <nav className="bg-gray-800 h-[6rem] w-full">
      <div className="container max-w-5xl mx-auto flex justify-between items-center h-full lg:px-14 md:px-12 px-6">
        <div>
          <Image
            src="/assets/img/Logo.png"
            width={150}
            height={80}
            alt="Logo"
            sizes="(max-width: 768px) 100px, 150px"
          />
        </div>

        <ul className="hidden md:flex text-white items-center gap-16 text-xl font-semibold">
          <li>
            <Link href="/" className={linkStyles} aria-current="page">
              Home
            </Link>
          </li>
          <li>
            <Link href="/components/blogCards" className={linkStyles}>
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/components/Contact" className={linkStyles}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="text-white text-3xl"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
              >
                ☰
              </button>
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader />
              <ul className="flex flex-col items-center gap-6 mt-14 text-lg font-medium text-gray-800">
                <li>
                  <Link
                    href="/"
                    className={linkStyles}
                    onClick={handleLinkClick}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/blogCards"
                    className={linkStyles}
                    onClick={handleLinkClick}
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/Contact"
                    className={linkStyles}
                    onClick={handleLinkClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
