import Image from "next/image";
import Link from "next/link";
import { Info,X } from "lucide-react";

export function Footer() {
  return (
    <>
    <section className="relative bg-slate-700 text-white overflow-hidden py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Link href="/">
                <Image
                  width={80}
                  height={40}
                  src="https://utfs.io/f/a4db92de-2163-4ff9-885f-581e139e6a22-xkywas.png"
                  alt="logo of website"
                  />
                  </Link>
                <span className="ml-4 text-lg font-bold">Lets Resource</span>
              </div>
              <div>
                <p className="text-sm text-white">
                  &copy; Copyright @ 2022. All Rights Reserved by Lets code.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full text-white p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase ">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link href="/services">
                    <span className="text-base font-medium  hover:text-gray-100">
                      Services
                    </span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/community">
                    <span className="text-base font-medium  hover:text-gray-100">
                      Community
                    </span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/products">
                    <span className="text-base font-medium  hover:text-gray-100">
                      Products
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="text-base font-medium  hover:text-gray-100">
                      About
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link href="/account">
                    <span className="text-base font-medium  hover:text-gray-100">
                      Account
                    </span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/help">
                    <span className="text-base font-medium  hover:text-gray-100">
                      Help
                    </span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/contact">
                    <span className="text-base font-medium  hover:text-gray-100">
                      Contact Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/CustomerSupport">
                    <span className="text-base font-medium  hover:text-gray-100">
                      Customer Support
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase ">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link href="/terms">
                    <span className="text-base font-medium  hover:text-gray-100">
                      Terms &amp; Conditions
                    </span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/cancellation">
                    <span className="text-base font-medium  hover:text-gray-100">
                      Cancellation
                    </span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/privacy-policy">
                    <span className="text-base font-medium hover:text-gray-100">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/licensing">
                    <span className="text-base font-medium  hover:text-gray-100">
                      Licensing
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-transparent p-4 opacity-80">
  <div className="flex items-center justify-center space-x-4">
    <div>
      <p className="text-sm font-medium">
        ⚠️ Credits to all individual respective contributors. Let&apos;s Code curated these resources for tech students and professionals ⚠️.
      </p>
    </div> 
  </div>
</div>
    </>
  );
}
