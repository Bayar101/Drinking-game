import NavButton from "./navButton";

export default function Navigation() {
  return (
    <div className="flex gap-4 items-center justify-center">
      <NavButton title="4x4" />
      <NavButton title="4x5" />
      <NavButton title="4x6" />
    </div>
  );
}
