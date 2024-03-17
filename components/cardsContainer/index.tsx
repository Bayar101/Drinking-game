import Card from "./card";
import { getRandomNumberInRange } from "@/utils";

interface Props {
  layout: string | string[] | undefined;
}
export default function CardsContainer({ layout }: Props) {
  const total = layout
    ? parseInt(layout?.toString().split("x")[0]) *
      parseInt(layout?.toString().split("x")[1])
    : 0;
  const randomNumber = getRandomNumberInRange(total);

  return (
    <div className="w-full h-full grid-cols-3 grid justify-center gap-4 items-center">
      {layout ? (
        <>
          {[...Array(total)].map((index, i) => (
            <div
              className="flex items-center justify-center w-full h-full"
              key={i}
            >
              <Card key={i} selected={i + 1 === randomNumber} />
            </div>
          ))}
        </>
      ) : (
        <>Please select a game layout depending on how many you are</>
      )}
    </div>
  );
}
