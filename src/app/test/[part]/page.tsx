import Survey from "@/components/survey";
import { db } from "@/db/connection";
import { questions } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

export type PersonalityPartParams = {
  params: { part: string };
};

export default async function PersonalityPart({
  params: { part },
}: PersonalityPartParams) {
  const personalityPart = await db
    .select()
    .from(questions)
    .where(eq(questions.part, Number(part)));

  return (
    <main className="flex flex-col bg-black text-zinc-100 items-center p-24">
      <Survey
        part={personalityPart[1].part}
        title={personalityPart[1].partTitle}
        questions={personalityPart}
      ></Survey>
      <div className="flex justify-between w-5/6 p-5">
        <Link
          replace
          href={
            personalityPart[0].part === 1
              ? "/"
              : `../test/${personalityPart[0].part - 1}`
          }
          className="rounded-lg hover:bg-zinc-600 bg-zinc-800 p-2 px-5"
        >
          back
        </Link>
        <Link
          replace
          href={
            personalityPart[0].part === 5
              ? "/"
              : `../test/${personalityPart[0].part + 1}`
          }
          className="rounded-lg hover:bg-zinc-600 bg-zinc-800 p-2 px-5"
        >
          next
        </Link>
      </div>
    </main>
  );
}
