import React from "react";
import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "assets/img/logo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-gradient-to-r from-indigo-600 to-maroon-500 lg:static lg:overflow-y-visible py-3"
          )
        }
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between">
                <div className="flex md:inset-y-0 md:left-0 lg:static ">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to="/">
                      <img
                        className="block h-5 w-auto"
                        src={logo}
                        alt="Your Company"
                      />
                    </Link>
                  </div>
                </div>

                <div className="flex items-center  md:inset-y-0 md:right-0 lg:hidden">
                  <Popover.Button className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end ">
                  <Link to="#" className="ml-5 flex-shrink-0">
                    <Button
                      kind="ghost"
                      className="rounded-md font-semibold text-white"
                    >
                      Login
                    </Button>
                  </Link>

                  <Link to="#" className="ml-5 flex-shrink-0">
                    <Button kind="primary" className="rounded-md font-semibold">
                      Start Free Trial
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
                  <div className="flex flex-col w-full">
                    <Link to="/login" className="lg:ml-5 flex-shrink-0 w-full">
                      <Button
                        kind="ghost"
                        className="rounded-md font-semibold text-white w-full"
                      >
                        Login
                      </Button>
                    </Link>

                    <Link
                      to="/register"
                      className="lg:ml-5 flex-shrink-0 w-full"
                    >
                      <Button
                        kind="primary"
                        className="rounded-md font-semibold w-full"
                      >
                        Start Free Trial
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}
