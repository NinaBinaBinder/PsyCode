import { PersonType } from "@/db/schema";
import Link from "next/link";
import P5Wrapper from "./p5-wrapper";
import { sketch } from "./sketch";

export default async function Card({ person }: { person: PersonType}) {
  function formatDate(dateString: string) {
    const date = new Date(dateString);

    const formattedDate = date.toLocaleTimeString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return formattedDate;
  }
  return (
    <div className="bg-white bg-opacity-30 p-5 ">
      <Link href={`../test/${person.id}/result/${person.name}`}>
        <div id="sketch" className="size-5">
      <div className="flex border">

      </div>
        </div>
        <div id="person">
          <p className="font-bold">{person.name}</p>
          <p>{person.dateAdded ? formatDate(String(person.dateAdded)) : "error"}</p>
        </div>
      </Link>
    </div>
  );
}
