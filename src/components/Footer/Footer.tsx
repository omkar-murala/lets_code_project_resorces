import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <section className="relative overflow-hidden py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Image
                  width={80}
                  height={40}
                  src="https://utfs.io/f/8ad9470c-f41a-467e-9864-07ec96f7dd84-5t6ga5.png"
                  alt="logo of website"
                />
                <span className="ml-4 text-lg font-bold">Lets Resource</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  &copy; Copyright @ 2022. All Rights Reserved by Lets code.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link href="/services">
                    <span className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Services
                    </span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/community">
                    <span className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Community
                    </span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/products">
                    <span className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Products
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="text-base font-medium text-gray-900 hover:text-gray-700">
                      About
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link href="/account">
                    <span className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Account
                    </span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/help">
                    <span className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Help
                    </span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/contact">
                    <span className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Contact Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/CustomerSupport">
                    <span className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Customer Support
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link href="/terms">
                    <span className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Terms &amp; Conditions
                    </span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/cancellation">
                    <span className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Cancellation
                    </span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/privacy-policy">
                    <span className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/licensing">
                    <span className="text-base font-medium text-gray-900 hover:text-gray-700">
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
  );
}
