"use client";

import { useState } from "react";
import Link from "next/link";

export default function SideBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdonwKampusOpen, setIsDropdonwKampusOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdownKampus = () => {
    setIsDropdonwKampusOpen(!isDropdonwKampusOpen);
  };

  return (
    <div className="h-screen  w-64 space-y-6 py-4 px-4 overflow-auto">
      {/* bisa menambahkan title disini */}
      <nav>
        <div className="space-y-1">
          <div className="relative space-y-2">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full px-4 py-2 text-left"
            >
              <span>Prodi</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  isDropdownOpen ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="mt-2 space-y-2 mx-2">
                <Link
                  href="/dashboard/prodi"
                  className="block px-4 py-2 text-sm text-gray-500 hover:text-black"
                >
                  Data Prodi
                </Link>
                <Link
                  href="/dashboard/bidang-studi"
                  className="block px-4 py-2 text-sm text-gray-500 hover:text-black"
                >
                  Data Bidang Studi
                </Link>
                <Link
                  href="/dashboard/kategori-skill"
                  className="block px-4 py-2 text-sm text-gray-500 hover:text-black"
                >
                  Data Kategori Skill
                </Link>
                <Link
                  href="/dashboard/skill"
                  className="block px-4 py-2 text-sm text-gray-500 hover:text-black"
                >
                  Data Skills
                </Link>
                <Link
                  href="/dashboard/kategori-kelebihan"
                  className="block px-4 py-2 text-sm text-gray-500 hover:text-black"
                >
                  Data Kategori Kelebihan Prodi
                </Link>
                <Link
                  href="/dashboard/kelebihan"
                  className="block px-4 py-2 text-sm text-gray-500 hover:text-black"
                >
                  Data Kelebihan
                </Link>
                <Link
                  href="/dashboard/kategori-kampus"
                  className="block px-4 py-2 text-sm text-gray-500 hover:text-black"
                >
                  Data Kategori Kampus
                </Link>
                <Link
                  href="/dashboard/kampus-terkait"
                  className="block px-4 py-2 text-sm text-gray-500 hover:text-black"
                >
                  Data Kampus Terkait
                </Link>
              </div>
            )}
            <button
              onClick={toggleDropdownKampus}
              className="flex items-center justify-between w-full px-4 py-2 text-left"
            >
              <span>Kampus</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  isDropdonwKampusOpen ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isDropdonwKampusOpen && (
              <div className="mt-2 space-y-2 mx-2">
                <Link
                  href="/data-bidang-studi"
                  className="block px-4 py-2 text-sm text-gray-500 hover:text-black"
                >
                  Data Kampus
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
