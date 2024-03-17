import Link from "next/link";

interface Props {
  title: string;
}
export default function NavButton({ title }: Props) {
  return (
    <Link
      href={{ pathname: "/", query: { layout: title } }}
      className="rounded-lg px-[12px] py-[8px] text-sky-300 font-medium"
    >
      {title}
    </Link>
  );
}
