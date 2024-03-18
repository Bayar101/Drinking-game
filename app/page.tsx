import CardsContainer from "@/components/cardsContainer";
import Navigation from "@/components/navigation";

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="w-full h-screen overflow-hidden flex flex-col gap-4 items-center p-[32px]">
      <Navigation />
      {searchParams?.layout ? (
        <CardsContainer layout={searchParams?.layout} />
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          To continue please select a layout from above
        </div>
      )}
    </main>
  );
}
