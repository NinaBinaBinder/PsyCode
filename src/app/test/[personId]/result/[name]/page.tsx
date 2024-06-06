"use server";
import Navbar from "@/components/navbar";
import P5Wrapper from "@/components/p5-wrapper";
import { sketch } from "@/components/sketch";
import Title from "@/components/title";
import { db } from "@/db/connection";
import { answers, personalities, questions } from "@/db/schema";
import { eq } from "drizzle-orm";

export type PersonalityPartParams = {
  params: { personId: string };
};
export type FormAnswerType = {
  questionId: string;
  answerValue: number;
}

export default async function Result({
  params: { personId },
}: PersonalityPartParams) {
  const person = await db
    .select()
    .from(personalities)
    .where(eq(personalities.id, personId));

  const personAnswers = await db
    .selectDistinct()
    .from(answers).innerJoin(questions, eq(questions.id, answers.questionId))
    .where(eq(answers.personId, personId)).orderBy(questions.questionNumber);

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
        <Navbar currentPage={"personalities"} />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <p className="">this is</p>
        <p className="font-bold text-6xl">{person[0].name}</p>
      </div>
      <div className="flex justify-center">
        <P5Wrapper sketch={sketch} answerValues={answerValues} size={1500} />
      </div>
    </div>
  );
}