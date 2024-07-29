"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.25)] z-20 top-12 right-0 flex flex-col gap-6">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <div>
          <Image
            src="https://cdn-images.farfetch-contents.com/16/89/47/67/16894767_35779004_600.jpg"
            alt=""
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          <div>
            {/* TOP */}
            {/* TITLE */}
            {/* DESC */}
            {/* BOTTOM */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
