import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="text-7xl">Hola Next</div>

      <Link className="flex flex-auto text-green-500 font-extrabold" href={"/about"}>Ir a About</Link>

    </main>
  );
}
