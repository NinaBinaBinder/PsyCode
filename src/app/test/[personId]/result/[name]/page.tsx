"use server";

import Navbar from "@/components/navbar";
import P5Wrapper from "@/components/p5-wrapper";
import { sketch } from "@/components/sketch";
import { db } from "@/db/connection";
import { answers, personalities } from "@/db/schema";
import { P5CanvasInstance, SketchProps } from "@p5-wrapper/react";
import { eq } from "drizzle-orm";

export type PersonalityPartParams = {
  params: { personId: string };
};

export default async function Result({
  params: { personId },
}: PersonalityPartParams) {
  const person = await db
    .select()
    .from(personalities)
    .where(eq(personalities.id, personId));

  const personAnswers = await db
    .selectDistinct()
    .from(answers)
    .where(eq(answers.personId, personId));
  //console.log('answers ', personAnswers.length)

  const answerValues = personAnswers.map((answers) => answers.responseValue);
  console.log("anserValues in results page", answerValues);

  return (
    <div className="h-full font-mono bg-black text-white">
      <Navbar/>
      <div className="z-40 mt-10 justify-center content-center text-lg items-center flex flex-col">
        <p>this is</p>
        <p className="font-bold text-4xl">{person[0].name}</p>
      </div>
{personAnswers.map(answer => <p key={answer.id}>{answer.responseValue}</p> )}
     
      <div className="-z-10 absolute">
       <P5Wrapper sketch={sketch } props={answerValues}/>
      </div>
    </div>
  );
}
