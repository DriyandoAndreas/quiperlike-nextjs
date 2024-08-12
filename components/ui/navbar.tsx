"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

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
      <nav className="flex p-2 justify-between items-center sticky top-0 bg-background z-40 ">
        <div className="italic rounded-sm p-2 font-bold">
          <Link href="/">SoICC</Link>
        </div>
        <div>
          <Menubar>
            {navLink.map((link, index) => {
              return (
                <MenubarMenu key={index}>
                  <MenubarLabel>
                    <Link href={link.path} className={` ${getLinkClasses(`${link.path}`)}`}>
                      {link.name}
                    </Link>
                  </MenubarLabel>
                </MenubarMenu>
              );
            })}

            {/* <MenubarMenu>
              <MenubarTrigger>Prodi</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/prodi">Lihat Semua Prodi</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Kampus</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/kampus">Lihat Semua Kampus</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu> */}
          </Menubar>
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
      </nav>
    </>
  );
}
