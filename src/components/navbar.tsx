import Link from "next/link";

export default function Navbar({ currentPage }: { currentPage?: string}) {
  return (
    <div className="p-5 flex justify-center">
      <Link href="/">
        <button className="border-2 p-1 px-4 mx-2 hover:bg-zinc-700">
          start
        </button>
      </Link>
      <Link href="/personalities">
        <button
          className={
            currentPage !== "personalities"
              ? "border-2 p-1 px-4 mx-2 hover:bg-zinc-700"
              : "border-2 bg-white border-white text-black p-1 px-4 mx-2 hover:bg-zinc-300"
          }
        >
          personalities
        </button>
      </Link>
      <Link href={'../personalities/latest'}>
        <button
          className={
            currentPage !== "latest"
              ? "border-2 p-1 px-4 mx-2 hover:bg-zinc-700"
              : "border-2 bg-white border-white text-black p-1 px-4 mx-2 hover:bg-zinc-300"
          }
        >
          latest{" "}
        </button>
      </Link>
    </div>
  );
}
