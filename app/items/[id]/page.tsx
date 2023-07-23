"use client";

import { fetchItemById } from "@/redux/actions/items";
import { useAppSelector } from "@/redux/hook";
import { useAppDispatch } from "@/redux/hook";
import Image from "next/image";
import { useEffect } from "react";

export default function Item({ params }: { params: { id: string } }) {
  const dispatch = useAppDispatch();

  const item = useAppSelector((state) => state.singleItemReducer);

  const { id } = params;

  useEffect(() => {
    dispatch(fetchItemById(id));
  }, []);

  return (
    <main className="bg-white rounded-sm flex mx-[150px] shadow-md h-[500px]">
      <div className="w-4/6 px-12 pt-4">
        <div>
          <Image
            src={item.data.thumbnail!}
            width={300}
            height={300}
            alt="Logo mercadolibre"
          />
        </div>
        <div>
          <p className="text-2xl">Descripcion del producto</p>
          <p>{item.data.title}</p>
        </div>
      </div>
      <div className="w-2/6 p-4">
        <div>
          {item.data.price} {item.data.currency_id}
        </div>
        <button className="bg-blue-500 text-white rounded-sm p-1 w-full">
          Comprar
        </button>
      </div>
    </main>
  );
}
