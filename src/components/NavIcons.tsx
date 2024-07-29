"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProfileModal from "./ProfileModal";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const router = useRouter();

  const isLoggedIn = true;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    if (isLoggedIn) {
      setProfileOpen((prev) => !prev);
    }
  };
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && <ProfileModal />}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          onClick={() => setCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 bg-red-400 h-6 rounded-full flex items-center justify-center text-white">2</div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
