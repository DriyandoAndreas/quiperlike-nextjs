"use client";

import Link from "next/link";
import { Avatar, AvatarImage } from "./avatar";


export default function Navbar() {
  return (
    <div className="bg-black">
      <div className="container p-4">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/dashboard" className="text-white">
              Dashboard
            </Link>
          </div>
          <div className="space-x-2">
            <Avatar>
              <AvatarImage src="/vercel.svg" className="bg-white"></AvatarImage>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}
