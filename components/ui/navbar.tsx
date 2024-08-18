"use client";
import Image from "next/image";
import { Menubar, MenubarLabel, MenubarMenu } from "@/components/ui/menubar";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const { setTheme } = useTheme();
  const router = usePathname();
  const navLink = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Prodi",
      path: "/prodi",
    },
    {
      name: "Kampus",
      path: "/kampus",
    },
  ];
  const getLinkClasses = (path: string) => {
    if (path === "/") {
      return router === path ? "text-black dark:text-white" : "text-gray-400";
    } else {
      return router.startsWith(path)
        ? "text-black dark:text-white"
        : "text-gray-400";
    }
  };
  return (
    <>
      <nav className="sticky top-0 bg-background z-40 border-b-4 border-b-blue-400">
        <div className="md:hidden">
          <div className="flex flex-row justify-between items-center p-4">
            <div>
              <Link href="/">
                <Image
                  src="/logo-uny.png"
                  width={150}
                  height={150}
                  alt="Universitas Negri Yogyakarta"
                  priority={true}
                  style={{ width: "50%" }}
                />
              </Link>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <div className="font-bold">SoiCC</div>
              </div>
            </div>
            <div>
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
          </div>
        </div>
      </nav>
      <div className="md:hidden fixed bottom-0 z-40 bg-background  w-full p-4 border-t-4 border-t-blue-400">
        <div className="flex flex-row justify-center gap-8">
          <Menubar>
            {navLink.map((link, index) => {
              return (
                <MenubarMenu key={index}>
                  <MenubarLabel>
                    <Link
                      href={link.path}
                      className={` ${getLinkClasses(`${link.path}`)}`}
                    >
                      {link.name}
                    </Link>
                  </MenubarLabel>
                </MenubarMenu>
              );
            })}
          </Menubar>
        </div>
      </div>
      <nav className="hidden lg:flex p-2 lg:justify-between lg:items-center sticky top-0 bg-background z-40 border-b-4 border-b-blue-400">
        <div className="italic rounded-sm p-2 font-bold">
          <Link href="/">
            <Image
              src="/logo-uny.png"
              width={150}
              height={150}
              alt="Universitas Negri Yogyakarta"
              priority={true}
              style={{ width: "50%", height: "auto" }}
            />
          </Link>
        </div>
        <div>
          <Link href="/">
            <div className="font-bold text-center">SoiCC</div>
            <span className="italic">
              Solution of Information Career College
            </span>
          </Link>
        </div>
        <div>
          <div className="flex gap-4">
            <Menubar>
              {navLink.map((link, index) => {
                return (
                  <MenubarMenu key={index}>
                    <MenubarLabel>
                      <Link
                        href={link.path}
                        className={` ${getLinkClasses(`${link.path}`)}`}
                      >
                        {link.name}
                      </Link>
                    </MenubarLabel>
                  </MenubarMenu>
                );
              })}
            </Menubar>
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
        </div>
      </nav>
    </>
  );
}
