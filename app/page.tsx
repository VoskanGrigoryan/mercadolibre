"use client";

import { useAppDispatch } from "../redux/hook";
import { useEffect } from "react";
import { fetchSpecificItems } from "@/redux/actions/items";
import CardList from "@/components/ui/CardList";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const dispatch = useAppDispatch();

  const searchParams = useSearchParams();

  const search = searchParams.get("items");

  useEffect(() => {
    if (search === null) {
      dispatch(fetchSpecificItems(null));
      return;
    }

    dispatch(fetchSpecificItems(search));
  }, [search]);

  return (
    <main>
      <CardList />
    </main>
  );
}
