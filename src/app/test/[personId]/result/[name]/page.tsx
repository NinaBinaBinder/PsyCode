'use server'
import P5Wrapper from "@/components/p5-wrapper";
import { sketch } from "@/components/sketch";
import { db } from "@/db/connection";
import { answers, personalities } from "@/db/schema";
import { eq } from "drizzle-orm";

export type PersonalityPartParams={
  params:{ personId: string, name : string}
}

export default async function Result({
  params: { personId, name },
}: PersonalityPartParams) {




//get the answers from localStorage/ Database
const person = await db.select().from(personalities).where(eq(personalities.name , name))
const personAnswers = await db.select().from(answers).where(eq(answers.personId , personId))


  return (
    <div className="h-full">
      <h1>{person[0].name}</h1>
      <div className="flex">{personAnswers.map((answer)=> <p key={answer.id}>{answer.responseValue}</p>)}</div>
      <div>
      </div>
    </div>
  );
}
