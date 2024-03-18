"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
interface Props {
  selected: boolean;
}
export default function Card({ selected }: Props) {
  const searchParams = useSearchParams();
  const layout = searchParams.get("layout");
  const state = searchParams.get("state");
  const router = useRouter();

  const [animation, setAnimation] = useState<"flip" | "fade" | "end" | "">("");
  useEffect(() => {
    if (animation === "flip") {
      if (layout)
        router.replace(
          `/?${CreateQueryString("layout", layout?.toString(), "state", "end")}`
        );
    }
  }, [animation]);

  const CreateQueryString = (
    name: string,
    value: string | null,
    name1: string,
    value1: string | null
  ) => {
    const params = new URLSearchParams(searchParams);
    if (value !== null) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    if (value1 !== null) {
      params.set(name1, value1);
    } else {
      params.delete(name1);
    }
    return params.toString();
  };
  return (
    <div className="w-[100px] h-[100px] relative group [perspective:1000px]">
      <button
        // className={`w-[100px] absolute [transform-style:preserve-3d] ${
        //   state === "end" && animation !== "flip" && "hidden"
        // } h-[100px] transition-all duration-500 rounded-lg ${
        //   selected && animation === "flip"
        //     ? `bg-green-400 [transform:rotateY(180deg)]`
        //     : `bg-sky-300 ${animation === "fade" && "opacity-0 "}`
        // }`}
        className={`w-[100px] h-[100px] absolute [transform-style:preserve-3d] transition-all duration-500 rounded-lg ${
          state === "end" && !selected && "hidden"
        } ${
          selected &&
          animation === "flip" &&
          "bg-green-400 [transform:rotateY(180deg)]"
        } ${!selected && animation === "fade" && "opacity-0"} ${
          animation === "" && "bg-sky-300"
        }`}
        onClick={() => {
          setAnimation(selected ? "flip" : "fade");
        }}
      >
        {selected && animation === "flip" ? (
          <p className="[transform:rotateY(180deg)]">WINNER</p>
        ) : (
          "Card"
        )}
        {selected && "THIS"}
      </button>
    </div>
  );
}
