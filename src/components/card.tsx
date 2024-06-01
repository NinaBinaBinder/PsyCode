import { PersonType } from "@/db/schema";
import Link from "next/link";

export default function Card({ person }: { person: PersonType }) {
  function formatDate(dateString: string) {
    const date = new Date(dateString);

    const formattedDate = date.toLocaleDateString("de-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return formattedDate;
  }
  return (
    <div className="rounded-lg bg-white bg-opacity-50 p-5 ">
      <Link replace href={`../result/${person.id}`}>
        <div id="sketch"></div>
        <div id="person">
          <p className="font-bold">{person.name}</p>
          <p>{person.dateAdded ? formatDate(String(person.dateAdded)) : ""}</p>
        </div>
      </Link>
    </div>
  );
}
