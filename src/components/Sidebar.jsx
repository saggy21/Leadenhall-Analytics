"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Add or remove the class based on the state
  useEffect(() => {
    const sidebar = document.getElementById("logo-sidebar");
    if (isOpen) {
      sidebar.classList.add("sidebar-opened");
    } else {
      sidebar.classList.remove("sidebar-opened");
    }
  }, [isOpen]);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // https://www.shutterstock.com/shutterstock/photos/1040229760/display_1500/stock-photo-pink-bright-texture-for-designer-background-gentle-classic-texture-colorful-background-colorful-1040229760.jpg

  return (
    <div>
      <>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gradient-to-r from-cyan-500 to-blue-500 dark:border-gray-700">
          {/* <nav className="fixed top-0 z-50 w-full  border-b  border-gray-200 dark:border-gray-700 "> */}

          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button
                  data-drawer-target="logo-sidebar"
                  // data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden bg-gray-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  onClick={toggleSidebar}
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                  </svg>
                </button>
                <Link href="/" className="flex ms-2 md:me-24">
                  <span className="self-center py-2 text-blue-300  text-sm font-semibold sm:text-4xl whitespace-nowrap ">
                    .
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-60 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gradient-to-r from-cyan-500 to-blue-500">
            <ul className="space-y-2 mt-4 font-medium">
              <li>
                <Link
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-800 group"
                >
                  <span className="ms-3">Chatbot</span>
                </Link>
              </li>

              {/* <li>
                <Link
                  href="/pages/section1"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-800 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Section1
                  </span>
                </Link>
              </li> */}

              <li>
                <Link
                  href="/pages/section2"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-800 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Analysis Report
                  </span>
                </Link>
              </li>

              {/* <li>
                <Link
                  href="/pages/data2"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-800 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                  Section3
                  </span>
                </Link>
              </li> */}
            </ul>
          </div>
        </aside>
      </>
    </div>
  );
};

export default Sidebar;
