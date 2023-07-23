import { SearchIcon } from "@/assets/icons";
import { EvenInput } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "../../assets/logos/ml-logo.png";

export default function SearchBar() {
  const router = useRouter();

  const [item, setItem] = useState("");

  const handleChange = (e: EvenInput) => {
    setItem(e.target.value);
  };

  return (
    <form>
      <Link href="/">
        <Image
          src={Logo}
          width={120}
          height={120}
          alt="Logo mercadolibre"
          className="z-50 absolute mt-4 ml-4 left-0 top-0"
        />
      </Link>
      <div className="relative w-full">
        <input
          type="search"
          name="items"
          value={item}
          className="block p-2 w-[500px] z-20 text-sm text-gray-900 focus:outline-none !bg-white rounded-r-md rounded-l-md"
          placeholder="Search"
          onChange={handleChange}
          required
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            // const formatedString = item.replaceAll(" ", "+");
            router.push(`?items=${item}`);
          }}
          type="button"
          className="absolute top-0 right-0 p-2 h-full text-sm font-medium text-white bg-gray-200 rounded-r-md hover:bg-gray-300"
        >
          <SearchIcon className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
