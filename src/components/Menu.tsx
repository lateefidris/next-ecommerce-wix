"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      />
      {open && (
        <div className="absolute left-0 top-20 bg-black text-white w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-2xl z-10">
          <Link href="/">Homepage</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/logout">Logout</Link>
          <Link href="/cart">Cart(3)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
