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
};

export const dynamic = "force-dynamic";

export default async function Latest() {


  const person = await db
    .select()
    .from(personalities)
    .orderBy(desc(personalities.dateAdded));

    console.log(person.length)

  const personAnswers = await db
    .selectDistinct()
    .from(answers)
    .innerJoin(questions, eq(questions.id, answers.questionId))
    .where(eq(answers.personId, person[0].id))
    .orderBy(questions.questionNumber);

  let answerValues: FormAnswerType[] = [];
  for (let i = 0; i < 26; i++) {
    answerValues.push({ questionId: String(i), answerValue: 50 });
  }

  personAnswers.forEach((personAnswer) => {
    const questionNumber = personAnswer.questions.questionNumber;
    if (questionNumber >= 0 && questionNumber < 26) {
      answerValues[questionNumber].answerValue =
        personAnswer.answers.responseValue;
    }
  });

  return (
    <div className="-z-10 bg-black text-white">
      <div className="flex md:flex-rowflex-col md:justify-between md:place-items-end mb-5">
        <Title>{person[0].name}</Title>
        <Navbar currentPage={"latest"} />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center"></div>
      <div className="absolute justify-center">
        <P5Wrapper sketch={sketch} answerValues={answerValues} />
      </div>
    </div>
  );
}
