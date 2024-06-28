"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';

const menuItems = [
  { name: "Home", href: "/" },
  {name:"About", href:"/about"},
  { name: "Contact", href: "/contact" },
  { name: "Resource", href: "/resourses" }
];

export function Navbar() {
  // const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [image, setImage] = useState("");
  // const router = useRouter();

  // const handleSignIn = () => {
  //   // Redirect to dashboard after sign-in
  //   router.push('/dashboard');
  // };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="relative w-full bg-slate-700">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>       
            <Link href="/">
            <Image
              width={50}
              height={50}
              src="https://utfs.io/f/a4db92de-2163-4ff9-885f-581e139e6a22-xkywas.png"
              alt="logo of website"
              />
          </Link>
          </span>
          <span className="font-bold text-white">Lets Resource</span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-white hover:text-gray-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <SignedOut>
            <span className="text-white font-semibold">
            <SignInButton/>
            </span>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </div>

         
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer text-white" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <Image
                        width={50}
                        height={50}
                        src="https://utfs.io/f/8ad9470c-f41a-467e-9864-07ec96f7dd84-5t6ga5.png"
                        alt="logo of website"
                      />
                    </span>
                    <span className="font-bold">Lets Resource</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex flex-col items-center justify-center">
                     <SignedOut>
                      <span className="text-black font-semibold">
                       <SignInButton/>

                      </span>
                      </SignedOut>
                      <SignInButton>
                        <UserButton/>
                      </SignInButton>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



