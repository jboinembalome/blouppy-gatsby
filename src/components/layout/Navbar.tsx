/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from "react";
import { Link } from "gatsby";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Search from "../search";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ThemeToggle } from "../ThemeToggle";
import { BlouppyIcon } from "../shared/svg/BlouppyIcon";
import { BlouppyWithTextIcon } from "../shared/svg/BlouppyWithTextIcon";
import { LinkGetProps } from "@reach/router";

export const Navbar = () => {
  const [toggleSearch, setToggleSearch] = useState(false);

  const toggleSearchChange = (event: boolean) => {
    setToggleSearch(event);
  };

  const searchClick = () => {
    setToggleSearch(true);
  };

  const navigation = {
    link: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Blog",
        href: "/blog",
      },
      {
        name: "Resume",
        href: "/resume",
      },
      {
        name: "Portfolio",
        href: "/portfolio",
      },
      {
        name: "About",
        href: "/about",
      },
      {
        name: "Contact",
        href: "/contact",
      },
    ],
  };

  const isActive = ({ isCurrent }: LinkGetProps): {} =>
    isCurrent
      ? {
          className:
            "text-gray-900 dark:text-gray-100 border-violet-500 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
        }
      : {};

  const isPartiallyActive = ({ isPartiallyCurrent }: LinkGetProps) =>
    isPartiallyCurrent
      ? {
          className:
            "text-gray-900 dark:text-gray-100 border-violet-500 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
        }
      : {};

  const isActiveForMobile = ({ isCurrent }: LinkGetProps) =>
    isCurrent
      ? {
          className:
            "bg-violet-50 border-violet-500 text-violet-700 text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
        }
      : {};

  const isPartiallyActiveForMobile = ({ isPartiallyCurrent }: LinkGetProps) =>
    isPartiallyCurrent
      ? {
          className:
            "bg-violet-50 border-violet-500 text-violet-700 text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
        }
      : {};

  const searchIndices = [{ name: `Pages`, title: `Pages` }];

  return (
    <Disclosure as="nav" className="shadow">
      {({ open }) => (
        <>
          {/* lg and more Menu */}
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" title="Logo">
                    <span className="sr-only">Home</span>
                    <BlouppyIcon className="block lg:hidden p-2 h-14 w-14" />
                  </Link>
                  <Link to="/" title="Logo">
                    <span className="sr-only">Home</span>
                    <BlouppyWithTextIcon className="text-gray-900 dark:text-gray-100 hidden lg:block p-2 w-32" />
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {navigation.link.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      getProps={
                        item.name == "Home" ? isActive : isPartiallyActive
                      }
                      className="text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center space-x-3 pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <button onClick={searchClick}>
                  <span className="sr-only">Search article with algolia</span>
                  <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 hover:text-gray-600" />
                </button>
                <Search
                  indices={searchIndices}
                  openModal={toggleSearch}
                  modalClosed={toggleSearchChange}
                />

                <div className="order-last">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>

          {/* sm Menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {navigation.link.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  getProps={
                    item.name == "Home"
                      ? isActiveForMobile
                      : isPartiallyActiveForMobile
                  }
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};