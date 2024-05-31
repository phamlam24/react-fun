import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Link href="./ui_basics" className="text-blue-600"> UI Basics </Link>
      </div>
    </main>
  );
}
