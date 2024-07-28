"use client";
import { useState } from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="h-screen bg-slate-300 w-64 space-y-6 py-7 px-4">
      {/* bisa menambahkan title disini */}
      <nav>
        <div className="space-y-1">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full px-4 py-2 text-left bg-slate-400 rounded-lg hover:bg-white"
            >
              <span>Data Prodi</span>
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
              <div className="mt-2 space-y-2">
                <Link
                  href="/data-bidang-studi"
                  className="block px-4 py-2 text-sm  bg-slate-400 rounded-lg hover:bg-white"
                >
                  Data Bidang Studi
                </Link>
                <Link
                  href="/data-kategori-skill"
                  className="block px-4 py-2 text-sm  bg-slate-400 rounded-lg hover:bg-white"
                >
                  Data Kategori Skill
                </Link>
                <Link
                  href="/data-skills"
                  className="block px-4 py-2 text-sm  bg-slate-400 rounded-lg hover:bg-white"
                >
                  Data Skills
                </Link>
                <Link
                  href="/data-kategori-kelebihan-prodi"
                  className="block px-4 py-2 text-sm  bg-slate-400 rounded-lg hover:bg-white"
                >
                  Data Kategori Kelebihan Prodi
                </Link>
                <Link
                  href="/data-kelebihan"
                  className="block px-4 py-2 text-sm  bg-slate-400 rounded-lg hover:bg-white"
                >
                  Data Kelebihan
                </Link>
                <Link
                  href="/data-kategori-kampus"
                  className="block px-4 py-2 text-sm  bg-slate-400 rounded-lg hover:bg-white"
                >
                  Data Kategori Kampus
                </Link>
                <Link
                  href="/data-kampus-terkait"
                  className="block px-4 py-2 text-sm  bg-slate-400 rounded-lg hover:bg-white"
                >
                  Data Kampus Terkait
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
