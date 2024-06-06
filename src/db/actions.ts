"use server";

import { db } from "@/db/connection";
import { answers, personalities, questions } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export async function getQuestions() {
  return await db.select().from(questions);
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
    // Check if an answer already exists for the given personId and questionId
    const existingAnswers = await db
      .select()
      .from(answers)
      .where(and(eq(answers.personId, personId), eq(answers.questionId, questionId)));

    if (existingAnswers.length === 0) {
      // If no answer exists, insert a new one
      await db.insert(answers).values({
        personId,
        questionId,
        responseValue,
        responseDate: new Date(),
      });

      
    } else {
      await db
        .update(answers)
        .set({
          responseValue,
          responseDate: new Date(),
        })
        .where(and(eq(answers.personId, personId), eq(answers.questionId, questionId)));

    }
  } catch (error) {
    console.error("Failed to save answer:", error);
    throw new Error("Failed to save answer");
  }
}
