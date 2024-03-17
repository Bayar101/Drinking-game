"use client";
interface Props {
  selected: boolean;
}
export default function Card({ selected }: Props) {
  return (
    <button
      className={`w-[100px] h-[100px] rounded-lg ${
        selected ? " bg-green-400" : "bg-sky-300"
      }`}
    >
      Card {selected && "yes"}
    </button>
  );
}
