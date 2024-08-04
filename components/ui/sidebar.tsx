"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { LogOut } from "lucide-react";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Menu, SquareChevronLeft, CircleX, ChevronDown, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SideBar() {
  //state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpenDashBoardMenu, setOpenDashBoardMenu] = useState(false);
  const [isDropdonwKampusOpen, setIsDropdonwKampusOpen] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const { setTheme } = useTheme();
  const sidebarRef = useRef<HTMLDivElement>(null);
  //button handler
  const toggleDashboardMenu = () => {
    setOpenDashBoardMenu(!isOpenDashBoardMenu);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdownKampus = () => {
    setIsDropdonwKampusOpen(!isDropdonwKampusOpen);
  };
  const toggleMobileMenu = () => {
    setMobile(!isMobile);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setMobile(false);
    }
  };
  //effect note: belum paham kegunaannya, find out later
  useEffect(() => {
    if (isMobile) {
      document.addEventListener("click", handleClickOutside, true);
    } else {
      document.removeEventListener("click", handleClickOutside, true);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isMobile]);
  return (
    <>
      {isMobile && (
        <div className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300 ease-in-out"></div>
      )}
      <div className="block md:hidden">
        <nav>
          <div className="flex flex-row justify-between p-4 items-center">
            <div>
              <button onClick={toggleMobileMenu}>
                <Menu size={24} />
              </button>
            </div>
            <div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </nav>
        <div
          ref={sidebarRef}
          className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-black z-50 flex flex-col space-y-4 top-0 transform transition-transform duration-300 ease-in-out ${
            isMobile ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 flex flex-row justify-between">
            <div>DASHBOARD</div>
            <button onClick={toggleMobileMenu}>
              <X />
            </button>
          </div>
          <div className="space-y-2 mx-2 overflow-auto">
            <div className="relative space-y-2">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full px-4 py-2 text-left rounded-sm hover:bg-gray-200 dark:hover:text-black"
              >
                <span>Prodi</span>
                <ChevronDown
                  className={`transition-transform ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="mt-2 space-y-2 mx-2">
                  <Link
                    href="/dashboard/prodi"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Prodi
                  </Link>
                  <Link
                    href="/dashboard/bidang-studi"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Bidang Studi
                  </Link>
                  <Link
                    href="/dashboard/kategori-skill"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Kategori Skill
                  </Link>
                  <Link
                    href="/dashboard/skill"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Skills
                  </Link>
                  <Link
                    href="/dashboard/kategori-kelebihan"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Kategori Kelebihan Prodi
                  </Link>
                  <Link
                    href="/dashboard/kelebihan"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Kelebihan
                  </Link>
                  <Link
                    href="/dashboard/kategori-kampus"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Kategori Kampus
                  </Link>
                  <Link
                    href="/dashboard/kampus-terkait"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Kampus Terkait
                  </Link>
                </div>
              )}
              <button
                onClick={toggleDropdownKampus}
                className="flex items-center justify-between w-full px-4 py-2 text-left rounded-sm hover:bg-gray-200 dark:hover:text-black"
              >
                <span>Kampus</span>
                <ChevronDown
                  className={`transition-transform ${
                    isDropdonwKampusOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdonwKampusOpen && (
                <div className="mt-2 space-y-2 mx-2">
                  <Link
                    href="/data-bidang-studi"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Kampus
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <aside
        className={` hidden md:h-screen md:flex md:flex-col transition-all ${
          isOpenDashBoardMenu
            ? "w-16 ease-in-out duration-300"
            : "w-64 ease-in-out duration-300"
        } space-y-6 py-4 px-4 sticky top-0 border-r`}
      >
        <div className={`${isOpenDashBoardMenu ? "p-0" : "px-4"}`}>
          <div
            className={`${
              isOpenDashBoardMenu
                ? ""
                : "flex flex-row items-center space-x-2 justify-between"
            }`}
          >
            <div className={`${isOpenDashBoardMenu ? "hidden" : ""}`}>
              DASHBOARD
            </div>
            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger onClick={toggleDashboardMenu}>
                    <SquareChevronLeft
                      className={`transition-transform ${
                        isOpenDashBoardMenu ? "transform rotate-180" : ""
                      }`}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    {isOpenDashBoardMenu ? (
                      <p>Open Dashboard</p>
                    ) : (
                      <p>Close Dashboard</p>
                    )}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <nav
          className={`${
            isOpenDashBoardMenu ? "hidden" : "h-full overflow-auto "
          }`}
        >
          <div className="space-y-1">
            <div className="relative space-y-2">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full px-4 py-2 text-left rounded-sm  hover:bg-gray-200 dark:hover:text-black"
              >
                <span>Prodi</span>
                <ChevronDown
                  className={`transition-transform ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="mt-2 space-y-2 mx-2">
                  <Link
                    href="/dashboard/prodi"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Prodi
                  </Link>
                  <Link
                    href="/dashboard/bidang-studi"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Bidang Studi
                  </Link>
                  <Link
                    href="/dashboard/kategori-skill"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Kategori Skill
                  </Link>
                  <Link
                    href="/dashboard/skill"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Skills
                  </Link>
                  <Link
                    href="/dashboard/kategori-kelebihan"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Kategori Kelebihan Prodi
                  </Link>
                  <Link
                    href="/dashboard/kelebihan"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Kelebihan
                  </Link>
                  <Link
                    href="/dashboard/kategori-kampus"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Kategori Kampus
                  </Link>
                  <Link
                    href="/dashboard/kampus-terkait"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Kampus Terkait
                  </Link>
                </div>
              )}
              <button
                onClick={toggleDropdownKampus}
                className="flex items-center justify-between w-full px-4 py-2 text-left  rounded-sm  hover:bg-gray-200 dark:hover:text-black"
              >
                <span>Kampus</span>
                <ChevronDown
                  className={`transition-transform ${
                    isDropdonwKampusOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdonwKampusOpen && (
                <div className="mt-2 space-y-2 mx-2">
                  <Link
                    href="/data-bidang-studi"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Data Kampus
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
        <div className={`${isOpenDashBoardMenu ? "hidden" : "px-4 py-2"} `}>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row space-x-2 items-center">
              <div className="">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      System
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="">Admin</div>
            </div>
            <div className="p-2 rounded-sm bg-red-600 text-white">
              <LogOut size={16} />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
