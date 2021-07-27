import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { WifiIcon, CheckCircleIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "Color System", href: "/color-system", current: false },
  { name: "Color Palettes", href: "/color-palettes", current: false },
  {
    name: "Color Gradients",
    href: "/color-gradients",
    current: true,
  },
  { name: "Font Pairings", href: "/font-pairings", current: false },
];

const NavBar = () => {
  const router = useRouter();

  return (
    <Popover className="bg-transparent">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-0">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href={navigation[0].href}>
                  <span className="sr-only">kewl colors</span>
                  {/* <h1 className="font-bold text-base md:text-lg">KewColors</h1> */}
                  <img src="/logo.png" alt="" />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white bg-opacity-75 rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.zomdar.com%2F&text=Colors%2C%20Fonts%2C%20Palettes%20and%20typography%20for%20Web%20Developers%20and%20Designers.%20By%20%40zomdar"
                  >
                    <div className="flex flex-row pl-4">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="text-white opacity-40"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                      <a className="pl-2 hover:text-purple-900 focused:text-purple-900">
                        Share on Twitter
                      </a>
                    </div>
                  </a>
                  <a target="_blank" href="https://zomdar.com">
                    <div className="flex flex-row pl-4">
                      <CheckCircleIcon className="h-5 w-5 text-gray-400 bg-opacity-50" />

                      <a className="pl-2 hover:text-purple-900 focused:text-purple-900">
                        Made by Wooj
                      </a>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center md:justify-start md:space-x-10">
              <div className="hidden md:flex items-center justify-start md:flex-1 lg:w-0 py-6 border-b-2 border-t-2 border-purple-500 border-opacity-50">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      className={
                        router.pathname.includes(item.href) ? "active" : ""
                      }
                    >
                      <Link href={item.href} key={item.name}>
                        <a className="hover:text-purple-400 focused:text-purple-900">
                          {item.name}
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <div className="flex space-x-4">
                    <p>v 1.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 text-gray-500">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="font-bold text-base md:text-lg">
                        KewlColors
                      </h1>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {navigation.map((item) => (
                        <div
                          key={item.name}
                          className={
                            router.pathname.includes(item.href) ? "active" : ""
                          }
                        >
                          <Link href={item.href} key={item.name}>
                            <a className="hover:text-purple-900 focused:text-purple-900">
                              {item.name}
                            </a>
                          </Link>
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default NavBar;
