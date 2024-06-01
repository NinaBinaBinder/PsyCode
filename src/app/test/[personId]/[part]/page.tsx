import Survey from "@/components/survey";
import { db } from "@/db/connection";
import { questions } from "@/db/schema";
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
          replace
          href={Number(part) === 1 ? "/" : `./scur`}
          className="rounded-lg hover:bg-zinc-600 bg-zinc-800 p-2 px-5"
        >
          back
        </Link>
        <Link
          replace
          href={{
            pathname:
              currentPart >= 5
                ? `/${personId}/result`
                : `/test/[personId]/${currentPart + 1}`,
            query: { personId: personId },
          }}
          className="rounded-lg hover:bg-zinc-600 bg-zinc-800 p-2 px-5"
        >
          next
        </Link>
      </div>
    </main>
  );
}
