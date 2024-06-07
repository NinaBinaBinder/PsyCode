import { db } from "@/db/connection";
import { AnswerType, answers, questions } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function Grell(){

    const everAnswers : AnswerType[] = []

const allAnswers = await db.select().from(answers).innerJoin(questions, eq(answers.questionId, questions.id)).orderBy(questions.questionNumber)

//order questions 
}