"use server";

import Navbar from "@/components/navbar";
import P5Wrapper from "@/components/p5-wrapper";
import { sketch } from "@/components/sketch";
import Title from "@/components/title";
import { db } from "@/db/connection";
import { answers, personalities, questions } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export type FormAnswerType = {
  questionId: string;
  answerValue: number;
}

export default async function Latest(){

  //get the last person check for updates every few seconds
  const person = await db
    .select()
    .from(personalities).orderBy(desc(personalities.dateAdded))

  const personAnswers = await db
    .selectDistinct()
    .from(answers).innerJoin(questions, eq(questions.id, answers.questionId))
    .where(eq(answers.personId, person[0].id)).orderBy(questions.questionNumber);

    let answerValues: FormAnswerType[] = [];
    for (let i = 0; i < 26; i++) {
      answerValues.push({ questionId: String(i), answerValue: 50 });
    }

    personAnswers.forEach((personAnswer) => {
      const questionNumber = personAnswer.questions.questionNumber;
      if (questionNumber >= 0 && questionNumber < 26) {
        answerValues[questionNumber].answerValue = personAnswer.answers.responseValue;
      }
    });

  return (
    <div className="h-full font-mono bg-black text-white">
      <div className="flex md:flex-row flex-col md:justify-between md:place-items-end mb-5">
        <Title />

        <Navbar currentPage={"latest"}/>
      </div>
      <div className="z-40 mt-10 justify-center content-center text-lg items-center absolute left-1/2">
        <p>this is</p>
        <p className="font-bold text-4xl">{person[0].name}</p>
      </div>
      <div className="flex justify-center">
        <P5Wrapper sketch={sketch} answerValues={answerValues} size={2000} />
      </div>
    </div>
  );
}