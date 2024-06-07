'use client'

import { PersonType } from "@/db/schema";
import Link from "next/link";
import { fonts } from "./title";

export default function Card({ person }: { person: PersonType }) {
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: '2-digit',
      minute: '2-digit',

    });
  }

  function randomFont(fonts: string[]) {
    return fonts[Math.floor(Math.random() * 2)];
  }

  return (
    <div className="bg-white rounded-xl border hover:bg-opacity-40 bg-opacity-30 p-5">
      <Link href={`../test/${person.id}/result/${person.name}`}>
          <p className={`${randomFont(fonts)} text-2xl`}>{person.name}</p>
          <p className=" italic text-sm">
            {person.dateAdded ? formatDate(String(person.dateAdded)) : ""}
          </p>
      </Link>
    </div>
  );
}
