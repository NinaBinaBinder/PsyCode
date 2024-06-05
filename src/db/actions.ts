"use server";

import { db } from "@/db/connection";
import { answers, personalities, questions } from "@/db/schema";
import { and, eq} from "drizzle-orm";

export async function getQuestions(){
  return await db.select().from(questions)
}

export async function addPerson({ name }: { name: string }) {
  const person = await db
    .insert(personalities)
    .values({ name })
    .returning({ personId: personalities.id });
    return person[0].personId;
}

export async function addAnswer({
  personId,
  questionId,
  responseValue,
}: {
  personId: string;
  questionId: string;
  responseValue: number;
}) {
  try {
    const existingAnswer = await db
      .select()
      .from(answers)
      .where(
        and(eq(answers.personId, personId), eq(answers.questionId, questionId))
      );

    if (existingAnswer.length > 0) {
      // If an answer already exists, update it
      await db
        .update(answers)
        .set({
          responseValue,
          responseDate: new Date(),
        })
        .where(
          and(
            eq(answers.personId, personId),
            eq(answers.questionId, questionId)
          )
        );

      console.log(
        `Updated existing answer for personId: ${personId}, questionId: ${questionId}`
      );
    } else {
      // If no answer exists, insert a new one
      await db.insert(answers).values({
        personId,
        questionId,
        responseValue,
        responseDate: new Date(),
      });

      console.log(
        `Added new answer for personId: ${personId}, questionId: ${questionId}`
      );
    }
  } catch (error) {
    console.error("Failed to save answer:", error);
    throw new Error("Failed to save answer");
  }
}
