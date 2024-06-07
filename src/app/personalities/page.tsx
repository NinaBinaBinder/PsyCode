import Card from "@/components/card";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import { db } from "@/db/connection";
import { personalities } from "@/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function Personalities() {
  const allPeople = await db
    .select()
    .from(personalities)
    .orderBy(desc(personalities.dateAdded));

  return (
    <div className="p-5 bg-black text-white">
      <div className="flex flex-row justify-between place-items-end mb-5">
        <Title>PsyCode</Title>
        <Navbar currentPage="personalities" />
      </div>{" "}
      <p>{allPeople.length}</p>
      <div className="grid grid-cols-3 gap-4">
        {allPeople.map((person) => (
          <Card key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}
