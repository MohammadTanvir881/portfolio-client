"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBlog, FaProjectDiagram, FaEnvelope, FaHome } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Prevent body scroll when sidebar is open (on mobile)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 bg-gray-700 text-white p-2 rounded-full md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <MdClose className="text-2xl" />
        ) : (
          <IoReorderThreeOutline className="text-2xl" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 bg-gray-100 text-gray-700 min-h-screen overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 md:relative md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 md:hidden">
          <button
            className="bg-gray-700 text-white p-2 rounded-full"
            onClick={toggleSidebar}
          >
            <MdClose className="text-2xl" />
          </button>
        </div>

        <div className="mt-8">
          <ul>
            <li>
              <Link href="/dashboard/blogmanagement">
                <span className="flex items-center py-2 my-2 px-4 hover:bg-gray-700 hover:text-white transition-all duration-200">
                  <FaBlog className="mr-2" />
                  Blog Management
                </span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/createBlog">
                <span className="flex items-center py-2 my-2 px-4 hover:bg-gray-700 hover:text-white transition-all duration-200">
                  <IoMdCreate className="mr-2" />
                  Create Blog
                </span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/projectmanagement">
                <span className="flex items-center py-2 my-2 px-4 hover:bg-gray-700 hover:text-white transition-all duration-200">
                  <FaProjectDiagram className="mr-2" />
                  Project Management
                </span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/createProject">
                <span className="flex items-center py-2 my-2 px-4 hover:bg-gray-700 hover:text-white transition-all duration-200">
                  <IoMdCreate className="mr-2" />
                  Create Project
                </span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/messagemanagement">
                <span className="flex items-center py-2 my-2 px-4 hover:bg-gray-700 hover:text-white transition-all duration-200">
                  <FaEnvelope className="mr-2" />
                  Message Management
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="flex items-center py-2 my-2 px-4 hover:bg-gray-700 hover:text-white transition-all duration-200">
                  <FaHome className="mr-2" />
                  Return Home
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
