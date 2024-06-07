"use client";

import Title from "@/components/title";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default async function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center align-middle  p-24 text-white bg-black ">
      <div className="items-center align-middle">
      <Title>404</Title>
      <p className=" text-3xl">Error something went wrong (╥﹏╥)</p>
      </div>
      <Link href="/">
        <button className="rounded-full italic  m-10 font-serif border-2 p-1 px-4 mx-2 hover:bg-zinc-700">
          start
        </button>
      </Link>
    </main>
  );
}
