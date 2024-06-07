import Link from "next/link";

export default function Navbar({ currentPage }: { currentPage?: string}) {
  return (
    <div className="p-5 flex justify-center">
      <Link href="/">
        <button className="rounded-full border-2 p-1 px-4 mx-2 hover:bg-zinc-700">
          start
        </button>
      </Link>
      <Link href="/personalities">
        <button
          className={
            currentPage !== "personalities"
              ? "rounded-full border-2 p-1 px-4 mx-2  hover:bg-zinc-700"
              : "rounded-full border-2 bg-white italic font-serif border-white text-black p-1 px-4 mx-2 hover:bg-zinc-300"
          }
        >
          personalities
        </button>
      </Link>
      <Link href={'/personalities/latest'}>
        <button
          className={
            currentPage !== "latest"
              ? "rounded-full border-2 p-1 px-4 mx-2 italic font-serif hover:bg-zinc-700"
              : "rounded-full border-2 bg-white border-white italic font-serif text-black p-1 px-4 mx-2 hover:bg-zinc-300"
          }
        >
          live
        </button>
      </Link>
    </div>
  );
}
