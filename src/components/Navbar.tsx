import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import Searchbar from "./Searchbar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 relative">
      <div className="flex justify-between items-center h-full md:hidden">
        {/* MOBILE */}
        <Link href="/">
          <div className="text-2xl tracking-widest font-semibold">LAMA</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.png" width={24} height={24} alt="" />
            <div className="text-2xl tracking-widest font-semibold">LAMA</div>
          </Link>
          <div className="hidden xl:flex gap-8">
            <Link href="/">Homepage</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/deals">Deals</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <Searchbar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
