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
      <CardsContainer layout={searchParams?.layout} />
    </main>
  );
}
