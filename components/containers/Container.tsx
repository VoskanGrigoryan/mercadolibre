"use client";

import { ContainerProps } from "@/types/interfaces";
import SearchBar from "../ui/SearchBar";

export default function BaseContainer(props: ContainerProps) {
  const { children } = props;

  return (
    <div className="min-h-screen bg-gray-800">
      <div className="flex p-3 justify-center bg-yellow-300 sticky top-0 w-full">
        <SearchBar />
      </div>
      <div className="px-36 h-full pt-10">{children}</div>
    </div>
  );
}
