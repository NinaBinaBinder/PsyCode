import Link from "next/link";

export default function Navbar() {
  return (
    <div className="p-5">
    
      <Link href="/">
        <button className="border-2 p-1 px-4 mx-2 hover:bg-zinc-700">
          start
        </button>
      </Link>
      <Link href='/personalities'><button className="border-2 p-1 px-4 mx-2 hover:bg-zinc-700">
        personalities
      </button></Link>
      
      <button className="border-2 p-1 px-4 mx-2 hover:bg-zinc-700">
        about
      </button>
    </div>
  );
}
