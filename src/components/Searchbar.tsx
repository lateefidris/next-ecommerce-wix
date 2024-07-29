"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";


const Searchbar = () => {
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
  
      if(name){
        router.push(`/list?name=${name}`)
      }
    };
  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 px-4 rounded-full flex-1 transition-colors duration-300 ease-in-out"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none font-medium"
      />
      <button>
        <Image
          src="/search.png"
          alt=""
          width={16}
          height={16}
          //   className="hover:scale-125 transition-transform duration-500 ease-in-out"
        />
      </button>
    </form>
  );
};

export default Searchbar;
