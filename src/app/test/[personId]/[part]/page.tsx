import Survey from "@/components/survey";
import { db } from "@/db/connection";
import { personalities, questions } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

export type PersonalityPartParams = {
  params: { part: string; personId: string };
};

export default async function Person({
  params: { personId, part },
}: PersonalityPartParams) {
  const surveyPart = part.charAt(0);

  const personalityPart = await db
    .select()
    .from(questions)
    .where(eq(questions.part, Number(surveyPart)));
  const currentPart = personalityPart[0].part;
  const person = await db
    .select()
    .from(personalities)
    .where(eq(personalities.id, personId));

  return (
    <main className="flex flex-col w-screen bg-black text-zinc-100 items-center p-24">
      <Survey
        personId={personId}
        name={person[0].name}
        part={personalityPart[0].part}
        title={personalityPart[0].partTitle}
        questions={personalityPart}
      ></Survey>
      
    </main>
  );
}
