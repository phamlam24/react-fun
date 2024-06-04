import Link from "next/link";
import Navbar from "./Navbar";
import TutorialPage from "./TutorialPage";

export default function Home() {
  return (
    <TutorialPage>
      <p>
        Head to a specific page, find that specific folder in the{" "}
        <Link
          href={"https://github.com/phamlam24/react-fun"}
          className="italic text-blue-600"
        >
          repository
        </Link>
        {" "}(src/app/folder), follow instructions, and happy learning!
      </p>
    </TutorialPage>
  );
}
