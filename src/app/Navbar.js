import Link from "next/link";

export default function Navbar({ current }) {
  return (
    <div className="flex flex-row align-center [&>*]:mx-2">
      <Link
        href="/"
        className={"text-xl " + (current == "" ? "" : "text-blue-600")}
      >
        Home
      </Link>
      <Link
        href="/ui_basics"
        className={"text-xl " + (current == "ui_basics" ? "" : "text-blue-600")}
      >
        UI Basics
      </Link>
      <Link
        href="/interactivity"
        className={
          "text-xl " + (current == "interactivity" ? "" : "text-blue-600")
        }
      >
        Interactivity
      </Link>
    </div>
  );
}
