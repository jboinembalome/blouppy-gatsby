/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby';
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from "../img/logo.svg";
import logoWithTextRow from "../img/logo-text-row.svg";
import logoWithTextRowWhite from "../img/logo-text-row-white.svg";
import Search from "./search"
import { SearchIcon } from '@heroicons/react/solid'

import Toggle from './Toggle';

function Navbar(props) {
  const [toggleTheme, setToggleTheme] = useState(() => {
    const initialState = loadTheme();
    return initialState;
  });

  useEffect(() => {
    if (toggleTheme) {
      document.body.classList.add('dark')
      if (typeof window !== 'undefined')
        localStorage.theme = 'dark'
    }

    else {
      document.body.classList.remove('dark')
      if (typeof window !== 'undefined')
        localStorage.theme = 'light'
    }

  }, [toggleTheme]);

  const toggleChange = (event) => {
    setToggleTheme(event);
  }

  const [toggleSearch, setToggleSearch] = useState(false)

  const toggleSearchChange = (event) => {
    setToggleSearch(event);
  }

  const searchClick = () => {
    setToggleSearch(true);
  }


  function loadTheme() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (typeof window !== 'undefined')
      if (localStorage.theme === 'light' || (!('theme' in localStorage))) {
        document.body.classList.remove('dark')
        return false;
      } else {
        document.body.classList.add('dark')
        return true;
      }
    else
      return false;
  }

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  };

  const navigation = {
    link: [
      {
        name: 'Home',
        href: '/'
      },
      {
        name: 'Blog',
        href: '/blog'
      },
      {
        name: 'Resume',
        href: '/resume'
      },
      {
        name: 'Portfolio',
        href: '/portfolio'
      },
      {
        name: 'About',
        href: '/about'
      },
      {
        name: 'Contact',
        href: '/contact'
      },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/jboinembalome',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      }
    ],
  }

  const isActive = ({ isCurrent }) =>
    isCurrent ? { className: "text-gray-900 dark:text-gray-100 border-violet-500 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" } : {};

  const isPartiallyActive = ({ isPartiallyCurrent }) =>
    isPartiallyCurrent ? { className: "text-gray-900 dark:text-gray-100 border-violet-500 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" } : {};

  const isActiveForMobile = ({ isCurrent }) =>
    isCurrent ? { className: "bg-violet-50 border-violet-500 text-violet-700 text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" } : {};

  const isPartiallyActiveForMobile = ({ isPartiallyCurrent }) =>
    isPartiallyCurrent ? { className: "bg-violet-50 border-violet-500 text-violet-700 text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" } : {};

  const searchIndices = [{ name: `Pages`, title: `Pages` }]

  return (
    <Disclosure as="nav" className="shadow">
      {({ open }) => (
        <>
          {/* lg and more Menu */}
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="block lg:hidden p-2 h-14 w-14" title="Logo">
                    <img src={logo} alt="Blouppy" />
                  </Link>
                  <Link to="/" className="hidden lg:block p-2 -mx-8 h-44 w-48" title="Logo">
                    <img src={toggleTheme ? logoWithTextRowWhite : logoWithTextRow} alt="Blouppy" />
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {navigation.link.map((item) => (
                    <Link key={item.name} to={item.href} getProps={item.name == "Home" ? isActive : isPartiallyActive} className="text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center space-x-3 pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <button onClick={searchClick}>
                <span class="sr-only">Search article with algolia</span>
                  <SearchIcon className="h-8 w-8 text-gray-400 hover:text-gray-500" />
                </button>
                <Search indices={searchIndices} openModal={toggleSearch} modalClosed={toggleSearchChange} />

                <div className="order-last">
                  <Toggle enabled={toggleTheme} onChange={toggleChange} />
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
                  getProps={item.name == "Home" ? isActiveForMobile : isPartiallyActiveForMobile}
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
  )

}

export default Navbar;
