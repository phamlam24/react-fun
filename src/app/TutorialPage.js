import Link from "next/link";

import { Title } from "@/components/TextFormat";
import Navbar from "./Navbar";

export default function TutorialPage({pageName="", title=null, children, showBottomNavbar=false}) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 [&>*]:m-4">
      {/* [&>*]:m-4 class adjust all margins for child inside div */}
      <Navbar current={pageName}></Navbar>

      {title && <Title>{title}</Title>}

      {children}

      {showBottomNavbar && <Navbar current={pageName}></Navbar>}
    </main>
  );
}
