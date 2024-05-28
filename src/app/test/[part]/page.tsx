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
    <main className="flex flex-col bg-black text-zinc-100 items-center justify-between p-24">
      <p className="text-2xl font-bold">{personalityPart[0].partTitle}</p>

      <div className="p-5 min-w-0.5">
        <form>
          {personalityPart.map((question) => (
            <div key="question" className="flex flex-col items-center py-4">
              <p className="font-bold text-xl">{question.question}</p>
              <div className="flex p-3">
                <p className="text-zinc-400">Disagree</p>
                <input
                  type="range"
                  id={String(question.id)}
                  className="mx-5"
                />
                <p className="text-zinc-400">Agree</p>
              </div>
            </div>
          ))}
        </form>
        
      </div>
      <div className="flex justify-between w-5/6 my-4">
          <Link
            replace
            href={
              personalityPart[0].part === 1
                ? "/"
                : `../test/${personalityPart[0].part - 1}`
            }
            className="bg-zinc-900 p-2 px-5 text-white  font-bold rounded-lg"
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
            className="bg-zinc-900 p-2 px-5 text-white  font-bold rounded-lg"
          >
            next
          </Link>
        </div>
    </main>
  );
}
