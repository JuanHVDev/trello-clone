import NewBoard from "@/components/new-board/NewBoard";
import Image from "next/image";

export default function Home()
{
  return (
    <main className="max-w-3xl border-4 border-white h-screen mx-auto">
      <div className="p-4">
        <h1 className="text-2xl font-bold antialiased">All boards</h1>
      </div>
      <div>
        <NewBoard />
      </div>
    </main>
  );
}
