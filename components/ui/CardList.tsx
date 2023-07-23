import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CardList() {
  const items = useAppSelector((state) => state.itemsReducer);
  const router = useRouter();

  //onClick should be replaced by Link
  return (
    <div>
      {items?.data?.results?.map((item, index) => {
        return (
          <div
            className="bg-white rounded-sm h-56 flex shadow-md mt-2 cursor-pointer"
            key={item.id}
            onClick={() => {
              router.push(`/items/${item.id}`);
            }}
          >
            <div className="w-1/5 m-2 my-4">
              <Image
                src={item?.thumbnail}
                width={250}
                height={250}
                alt="thumbnail"
                className="h-40"
              />
            </div>
            <div className="w-3/5 my-3">
              <p>
                {item?.installments?.amount} {item?.installments?.currency_id}
              </p>
              <p>{item?.title}</p>
            </div>
            <div className="w-1/5 my-3">
              {item?.address?.city_name}, {item?.address?.state_name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
