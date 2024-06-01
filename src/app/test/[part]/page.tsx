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
     
    </main>
  );
}
