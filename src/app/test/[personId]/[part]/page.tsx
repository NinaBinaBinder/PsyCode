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
  console.log(surveyPart);
  console.log({ personId, part });
  const personalityPart = await db
    .select()
    .from(questions)
    .where(eq(questions.part, Number(surveyPart)));
  const currentPart = personalityPart[0].part;
  const name = await db
    .select()
    .from(personalities)
    .where(eq(personalities.id, personId));

  return (
    <main className="flex flex-col bg-black text-zinc-100 items-center p-24">
      <Survey
        personId={personId}
        part={personalityPart[0].part}
        title={personalityPart[0].partTitle}
        questions={personalityPart}
      ></Survey>
      <div className="flex justify-between w-5/6 p-5">
        <Link
          href={
            Number(part) <= 1 ? `/` : `/test/${personId}/${currentPart - 1}`
          }
          className="rounded-lg hover:bg-zinc-600 bg-zinc-800 p-2 px-5"
        >
          back
        </Link>
        <Link
          
          href={
            currentPart < 5
              ? `/test/${personId}/${currentPart + 1}`
              : `../${personId}/result/${name[0].name}`
          }
          className="rounded-lg hover:bg-zinc-600 bg-zinc-800 p-2 px-5"
        >
          next
        </Link>
      </div>
    </main>
  );
}
