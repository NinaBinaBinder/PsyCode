import { PersonType } from "@/db/schema";
import Link from "next/link";
import P5Wrapper from "./p5-wrapper";
import { P5CanvasInstance, SketchProps } from "@p5-wrapper/react";
import { sketch } from "./sketch";

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
      <Link replace href={`../test/${person.id}/result/${person.name}`}>
        <div id="sketch" className="size-5">
         
        </div>
        <div id="person">
          <p className="font-bold">{person.name}</p>
          <p>{person.dateAdded ? formatDate(String(person.dateAdded)) : ""}</p>
        </div>
      </Link>
    </div>
  );
}
